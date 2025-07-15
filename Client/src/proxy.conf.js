const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7096';

const PROXY_CONFIG = [
  {
    context: [
      "/config",
    ],
    target: "https://wa-as-test-1-b3hrb9eke7eyhkbq.centralus-01.azurewebsites.net/config",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
