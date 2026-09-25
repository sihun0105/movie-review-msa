const RERELEASE_SUFFIX =
  /\s*[\[(]?(?:앙코르|재개봉|(?:4K\s*)?리마스터(?:링)?|감독판|확장판)[\])]?\s*$/iu;

export function getOriginalReleaseTitle(title: string): string | null {
  if (!RERELEASE_SUFFIX.test(title)) return null;
  return title.replace(RERELEASE_SUFFIX, '').trim() || null;
}

export function isSameMovieTitle(left: string, right: string): boolean {
  const normalize = (value: string) =>
    value
      .normalize('NFKC')
      .toLocaleLowerCase()
      .replace(/[^\p{L}\p{N}]/gu, '');
  return normalize(left) === normalize(right);
}
