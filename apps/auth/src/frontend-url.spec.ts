import { getFrontendUrl } from './frontend-url';

describe('getFrontendUrl', () => {
  it('uses the canonical domain in production despite a legacy IP URL', () => {
    process.env.NODE_ENV = 'production';
    process.env.FRONTEND_URL = 'http://58.79.17.11';
    delete process.env.PUBLIC_APP_URL;

    expect(getFrontendUrl()).toBe('https://bollae.kr');
  });

  it('allows an explicit public app URL and removes its trailing slash', () => {
    process.env.NODE_ENV = 'production';
    process.env.PUBLIC_APP_URL = 'https://www.bollae.kr/';

    expect(getFrontendUrl()).toBe('https://www.bollae.kr');
  });

  it('uses the configured local frontend URL in development', () => {
    process.env.NODE_ENV = 'development';
    process.env.FRONTEND_URL = 'http://localhost:3100/';
    delete process.env.PUBLIC_APP_URL;

    expect(getFrontendUrl()).toBe('http://localhost:3100');
  });
});
