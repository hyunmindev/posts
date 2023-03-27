import { getServerSideSitemap } from 'next-sitemap';

import { BLOG_URL } from '@/constants/meta';
import { getPosts } from '@/services/notion';

export async function GET() {
  return getServerSideSitemap(
    (await getPosts()).map(({ lastEditedTime, slug }) => ({
      changefreq: 'monthly',
      lastmod: lastEditedTime.toISOString(),
      loc: `${BLOG_URL}/${slug}`,
      priority: 1,
    }))
  );
}
