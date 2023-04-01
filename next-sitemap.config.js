/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://blog.hyunmin.dev',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    if (path.includes('posts')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 1,
      };
    }
    return {
      loc: path,
      changefreq: 'monthly',
      priority: 0.8,
    };
  },
};
