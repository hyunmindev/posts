import 'server-only';

import camelcaseKeys from 'camelcase-keys';
import dayjs from 'dayjs';
import rehypePrism from 'rehype-prism';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';

import { n2m, notion } from '@/configs/notion';
import { POST_NOTION_DATABASE_ID } from '@/constants';
import { Database, Post } from '@/types/notion';

const processPost = (result: any): Post => {
  const { cover, createdTime, id, lastEditedTime, properties } = camelcaseKeys(
    result,
    { deep: true }
  );
  const { author, category, description, slug, tags, title } = properties;
  return {
    author: author.people[0]?.name ?? null,
    category: category.select.name,
    cover: cover?.external.url ?? null,
    createdTime: dayjs(createdTime),
    description: description.richText[0]?.plainText ?? null,
    id,
    lastEditedTime: dayjs(lastEditedTime),
    slug: slug.richText[0].plainText,
    tags: tags.multiSelect.map((tag: { name: string }) => tag.name),
    title: title.title[0].plainText,
  };
};

export const getPosts = async (): Promise<Post[]> => {
  return (
    await notion.databases.query({
      database_id: POST_NOTION_DATABASE_ID,
      filter: {
        and: [
          { property: 'status', select: { is_not_empty: true } },
          { property: 'slug', rich_text: { is_not_empty: true } },
        ],
      },
      sorts: [{ direction: 'ascending', timestamp: 'created_time' }],
    })
  ).results.map(processPost);
};

export const getPost = async (slug: string): Promise<Post> => {
  const { results } = await notion.databases.query({
    database_id: POST_NOTION_DATABASE_ID,
    filter: { and: [{ property: 'slug', rich_text: { equals: slug } }] },
  });
  const [response] = results;
  if (!response) {
    throw new Error('Notion Error');
  }
  const blocks = await n2m.pageToMarkdown(response.id);
  const rawPost = n2m.toMarkdownString(blocks);
  const { value } = await remark()
    .use(remarkToc, { heading: 'toc' })
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrism)
    .use(rehypeRaw)
    .use(rehypeSlug)
    // .use(process.env.NODE_ENV === 'production' ? rehypeImage : () => undefined)
    .use(rehypeStringify)
    .process(rawPost);
  return { content: value.toString(), ...processPost(response) };
};

export const getDatabase = async (): Promise<Database> => {
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
};
