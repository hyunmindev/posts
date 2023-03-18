import camelcaseKeys from 'camelcase-keys';

import { notion } from '@/configs/notion';
import { POST_NOTION_DATABASE_ID } from '@/constants';
import { Post } from '@/types/post';

const processPost = (result: any): Post => {
  const { cover, createdTime, id, lastEditedTime, properties } = camelcaseKeys(
    result,
    { deep: true }
  );
  return {
    author: properties.author.people[0]?.name ?? null,
    category: properties.category.select?.name ?? null,
    cover: cover?.external?.url ?? null,
    createdTime: new Date(createdTime),
    description: properties.description.richText[0]?.plainText ?? null,
    id,
    lastEditedTime: new Date(lastEditedTime),
    slug: properties.slug.richText[0]?.plainText ?? null,
    tags: properties.tags.multiSelect.map((tag: { name: string }) => tag.name),
    title: properties.title.title[0]?.plainText ?? null,
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
  ).results
    .map(processPost)
    .filter(Boolean);
};
