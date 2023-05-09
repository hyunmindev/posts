import Link from 'next/link';

import ViewPointer from '@/app/components/ViewPointer';
import { CATEGORY_COLOR } from '@/constants';
import { getDatabase, getPosts } from '@/services/notion';

async function PostList() {
  const [posts, { categories }] = await Promise.all([
    getPosts(),
    getDatabase(),
  ]);

  return (
    <ul className="flex w-full flex-wrap px-8 py-2">
      {posts.map(({ category, createdTime, slug, title }) => {
        const color = CATEGORY_COLOR[categories[category]!.color];
        return (
          <li
            key={slug}
            className="h-60 w-full bg-background outline outline-stone-600 transition-transform duration-200 hover:scale-105 md:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            <Link
              className="relative flex h-full flex-col p-4 text-xs"
              href={`/posts/${slug}`}
            >
              <p
                className="text-sm"
                style={{ color }}
              >
                {category}
              </p>
              <time
                className="text-stone-400"
                dateTime={createdTime.format('YYYY-MM-DD')}
              >
                {createdTime.format('MMMM D, YYYY')}
              </time>
              <p className="absolute left-1/2 top-1/2 line-clamp-3 w-10/12 -translate-x-1/2 -translate-y-1/2 text-ellipsis break-words text-center text-xl text-stone-300">
                {title}
              </p>
              <ViewPointer slug={slug} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PostList;
