import { spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

process.chdir(fileURLToPath(new URL('..', import.meta.url)))
const args = process.argv.slice(2).filter((arg) => arg !== '--')
const services = []
const tests = []
let prepare = false
let all = false
const apps = readdirSync('apps').filter((app) => existsSync(`apps/${app}/tsconfig.app.json`))
for (let index = 0; index < args.length; index++) {
  const arg = args[index]
  if (arg === '--help') {
    console.log('verify --prepare | --service <app> [--test <file>]... | --all\n--prepare generates local clients only (no migration or database connection).')
    process.exit(0)
  }
  if (arg === '--prepare') prepare = true
  else if (arg === '--all') all = true
  else if (arg === '--service' && apps.includes(args[index + 1])) services.push(args[++index])
  else if (arg === '--test' && existsSync(args[index + 1] || '')) tests.push(args[++index])
  else throw new Error(`Unknown option, service or test path: ${arg}`)
}
if (!prepare && !all && !services.length && !tests.length) {
  console.error('Choose --service <app>, --test <file>, --all, or --prepare. See --help.')
  process.exit(1)
}
if (all && tests.length) throw new Error('--all and --test cannot be combined; choose a complete or focused check.')

const protoFiles = readdirSync('proto').filter((file) => file.endsWith('.proto')).sort()
const protoHash = createHash('sha256').update(JSON.stringify(
  protoFiles.map((file) => [file, readFileSync(`proto/${file}`, 'utf8')]),
)).digest('hex')
const protoStamp = '.verify/proto.sha256'

function run(label, command, options, env = process.env) {
  console.log(`\n[verify] ${label}`)
  const start = Date.now()
  const result = spawnSync(command, options, { env, stdio: 'inherit' })
  console.log(`[verify] ${label}: ${result.status === 0 ? 'PASS' : 'FAIL'} (${((Date.now() - start) / 1000).toFixed(1)}s)`)
  if (result.error) console.error(result.error.message)
  if (result.status !== 0) process.exit(result.status || 1)
}
function node(label, binary, options, env) {
  if (!existsSync(binary)) throw new Error('Dependencies missing. Run corepack pnpm install --frozen-lockfile.')
  run(label, process.execPath, [binary, ...options], env)
}

if (prepare) {
  run('generate gRPC', 'make', ['generate_grpc_code'])
  node('generate Prisma', 'node_modules/prisma/build/index.js', ['generate', '--schema', 'prisma/mysql.schema.prisma'], {
    ...process.env,
    DATABASE_URL: 'mysql://verification:verification@127.0.0.1:3306/verification',
  })
  mkdirSync('.verify', { recursive: true })
  writeFileSync(protoStamp, protoHash)
}
if (!all && !services.length && !tests.length) process.exit(0)

// Fail before expensive type checking when local generated types are stale.
const schema = 'prisma/mysql.schema.prisma'
const generated = 'prisma/generated/mysql/schema.prisma'
const normalize = (path) => readFileSync(path, 'utf8').replace(/\s+/g, '')
const missingProto = protoFiles
  .some((file) => !existsSync(`proto/${file.replace(/\.proto$/, '.ts')}`))
const staleProto = !existsSync(protoStamp) || readFileSync(protoStamp, 'utf8') !== protoHash
if (!existsSync(generated) || normalize(schema) !== normalize(generated) || missingProto || staleProto) {
  throw new Error('Generated clients missing/stale. Run pnpm verify --prepare, then repeat this check. Do not migrate the database.')
}

const targets = all ? apps : [...new Set(services)]
for (const service of targets) {
  node(`types: ${service}`, 'node_modules/typescript/bin/tsc', ['-p', `apps/${service}/tsconfig.app.json`, '--noEmit', '--incremental', 'false'])
}
if (all) node('types: tests', 'node_modules/typescript/bin/tsc', ['-p', 'tsconfig.test.json'])
const selection = tests.length ? ['--runTestsByPath', ...tests] : all ? [] : targets.map((app) => `apps/${app}/`)
node('tests', 'node_modules/jest/bin/jest.js', ['--runInBand', '--watch=false', ...selection])
console.log('\nVerification passed. Live integrations require separate, scoped checks.')
