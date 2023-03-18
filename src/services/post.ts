import camelcaseKeys from 'camelcase-keys';
import dayjs from 'dayjs';

import { notion } from '@/configs/notion';
import { POST_NOTION_DATABASE_ID } from '@/constants';
import { Post } from '@/types/post';

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
