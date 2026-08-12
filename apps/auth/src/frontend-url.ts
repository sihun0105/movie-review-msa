const PRODUCTION_APP_URL = 'https://bollae.kr';

export function getFrontendUrl(): string {
  const configuredUrl = process.env.PUBLIC_APP_URL ?? process.env.FRONTEND_URL;
  const fallbackUrl =
    process.env.NODE_ENV === 'production'
      ? PRODUCTION_APP_URL
      : 'http://localhost:3000';
  const selectedUrl =
    process.env.NODE_ENV === 'production' &&
    configuredUrl?.startsWith('http://')
      ? fallbackUrl
      : configuredUrl || fallbackUrl;

  return selectedUrl.replace(/\/$/, '');
}
