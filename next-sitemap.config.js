/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://blog.hyunmin.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/favicon.ico', '/posts/*', '/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://blog.hyunmin.dev/server-sitemap.xml'],
  },
};
