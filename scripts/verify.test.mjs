import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { copyFileSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { test } from 'node:test'

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'bollae-verify-'))
  t.after(() => rmSync(root, { recursive: true, force: true }))
  const write = (path, value) => {
    mkdirSync(dirname(join(root, path)), { recursive: true })
    writeFileSync(join(root, path), value)
  }
  const proto = 'syntax = "proto3";'
  write('apps/movie/tsconfig.app.json', '{}')
  write('apps/movie/example.spec.ts', '')
  write('proto/movie.proto', proto)
  write('proto/movie.ts', '// generated')
  write('prisma/mysql.schema.prisma', 'model Example {}')
  write('prisma/generated/mysql/schema.prisma', 'model Example {}')
  write('.verify/proto.sha256', createHash('sha256')
    .update(JSON.stringify([['movie.proto', proto]])).digest('hex'))
  write('node_modules/typescript/bin/tsc', 'console.log("TYPE_CHECK")')
  write('node_modules/jest/bin/jest.js', 'console.log("JEST_ARGS=" + JSON.stringify(process.argv.slice(2)))')
  write('scripts/verify.mjs', '')
  copyFileSync(new URL('./verify.mjs', import.meta.url), join(root, 'scripts/verify.mjs'))
  const run = (...args) => spawnSync(process.execPath, [join(root, 'scripts/verify.mjs'), ...args], { encoding: 'utf8' })
  return { root, write, run }
}

test('all checks every app and does not narrow Jest selection', (t) => {
  const { run } = fixture(t)
  const result = run('--all')
  assert.equal(result.status, 0, result.stderr)
  assert.match(result.stdout, /TYPE_CHECK/)
  assert.match(result.stdout, /JEST_ARGS=\["--runInBand","--watch=false"\]/)
})

test('all and explicit tests fail before starting any checks', (t) => {
  const { run } = fixture(t)
  const result = run('--all', '--test', 'apps/movie/example.spec.ts')
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /cannot be combined/)
  assert.doesNotMatch(result.stdout, /TYPE_CHECK|JEST_ARGS/)
})

test('changed proto source fails even when generated TypeScript exists', (t) => {
  const { write, run } = fixture(t)
  write('proto/movie.proto', 'syntax = "proto3"; message NewContract {}')
  const result = run('--all')
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /Generated clients missing\/stale/)
  assert.doesNotMatch(result.stdout, /TYPE_CHECK|JEST_ARGS/)
})

test('a missing preparation receipt fails before checking stale contracts', (t) => {
  const { root, run } = fixture(t)
  rmSync(join(root, '.verify/proto.sha256'))
  const result = run('--all')
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /verify --prepare/)
})
