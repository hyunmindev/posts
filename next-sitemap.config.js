/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://blog.hyunmin.dev',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://blog.hyunmin.dev/server-sitemap.xml'],
  },
};
