import 'server-only';

import camelcaseKeys from 'camelcase-keys';
import dayjs from 'dayjs';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';

import { MockData, withMock } from '@/configs/mock';
import { n2m, notion } from '@/configs/notion';
import { POST_NOTION_DATABASE_ID } from '@/constants';
import { Database, Post, TOC } from '@/types/notion';
import { rehypeA11y } from '@/utils/rehypeA11y';
import { rehypeBreakLine } from '@/utils/rehypeBreakLine';
import { rehypeImage } from '@/utils/rehypeImage';
import { rehypeTOC } from '@/utils/rehypeTOC';

const processPost = (result: any): Post => {
  const { cover, createdTime, lastEditedTime, properties } = camelcaseKeys(
    result,
    { deep: true }
  );
  const { category, description, slug, tags, title } = properties;
  return {
    category: category.select.name,
    cover: cover?.external.url ?? null,
    createdTime: dayjs(createdTime),
    description: description.richText[0]?.plainText ?? null,
    lastEditedTime: dayjs(lastEditedTime),
    slug: slug.richText[0].plainText,
    tags: tags.multiSelect.map((tag: { name: string }) => tag.name),
    title: title.title[0].plainText,
  };
};

export const getPosts = cache(
  withMock(
    MockData.POSTS,
    async (): Promise<Post[]> =>
      (
        await notion.databases.query({
          database_id: POST_NOTION_DATABASE_ID,
          filter: {
            and: [
              { property: 'title', title: { is_not_empty: true } },
              { checkbox: { equals: true }, property: 'public' },
              { property: 'slug', rich_text: { does_not_contain: '/' } },
              { property: 'category', select: { is_not_empty: true } },
            ],
          },
          sorts: [{ direction: 'ascending', timestamp: 'created_time' }],
        })
      ).results.map(processPost)
  )
);

export const getPost = cache(
  withMock(MockData.POST, async (slug: string): Promise<Post> => {
    const { results } = await notion.databases.query({
      database_id: POST_NOTION_DATABASE_ID,
      filter: { and: [{ property: 'slug', rich_text: { equals: slug } }] },
    });
    const [response] = results;
    if (!response) {
      notFound();
    }
    const blocks = await n2m.pageToMarkdown(response.id);
    const rawPost = n2m.toMarkdownString(blocks);
    const { data, value } = await remark()
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeBreakLine)
      .use(rehypeHighlight)
      .use(rehypeRaw)
      .use(rehypeTOC)
      .use(rehypeA11y)
      .use(rehypeImage)
      .use(rehypeStringify)
      .process(rawPost.trim());
    return {
      content: value.toString(),
      toc: data.toc as TOC[],
      ...processPost(response),
    };
  })
);

export const getDatabase = cache(
  withMock(MockData.DATABASE, async (): Promise<Database> => {
    const { properties } = await notion.databases.retrieve({
      database_id: POST_NOTION_DATABASE_ID,
    });
    const categories: { [key: string]: { color: string } } =
      // @ts-ignore
      properties.category.select.options.reduce(
        // @ts-ignore
        (acc, { color, name }) => ({ ...acc, [name]: { color } }),
        {}
      );
    const tags: { [key: string]: { color: string } } =
      // @ts-ignore
      properties.tags.multi_select.options.reduce(
        // @ts-ignore
        (acc, { color, name }) => ({ ...acc, [name]: { color } }),
        {}
      );
    return { categories, tags };
  })
);
