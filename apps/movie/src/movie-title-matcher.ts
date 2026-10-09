const RERELEASE_SUFFIX =
  /\s*[\[(]?(?:앙코르|재개봉|(?:4K\s*)?리마스터(?:링)?|감독판|확장판)[\])]?\s*$/iu;
const SERIES_SEASON_SUFFIX = /\s*[-–—:]?\s*season\s*\d+\s*$/iu;

export function getOriginalReleaseTitle(title: string): string | null {
  if (!RERELEASE_SUFFIX.test(title)) return null;
  return title.replace(RERELEASE_SUFFIX, '').trim() || null;
}

export function isSameMovieTitle(left: string, right: string): boolean {
  const normalize = (value: string) =>
    value
      .normalize('NFKC')
      .toLocaleLowerCase()
      .replace(/&/gu, 'and')
      .replace(/[^\p{L}\p{N}]/gu, '');
  return normalize(left) === normalize(right);
}

export function getSeriesBaseTitle(title: string): string {
  return title.replace(SERIES_SEASON_SUFFIX, '').trim();
}
