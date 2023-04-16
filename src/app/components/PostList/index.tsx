import Link from 'next/link';

import ViewPointer from '@/app/components/ViewPointer';
import { CATEGORY_COLOR } from '@/constants';
import { getDatabase, getPosts } from '@/services/notion';

import styles from './index.module.scss';

async function PostList() {
  const [posts, { categories }] = await Promise.all([
    getPosts(),
    getDatabase(),
  ]);

  return (
    <ul className={styles.postList}>
      {posts.map(({ category, createdTime, slug, title }) => {
        const { color } = categories[category] as { color: string };
        return (
          <li
            key={slug}
            className={styles.post}
          >
            <Link href={`/posts/${slug}`}>
              <p style={{ color: CATEGORY_COLOR[color] ?? '#999' }}>
                {category}
              </p>
              <time dateTime={createdTime.format('YYYY-MM-DD')}>
                {createdTime.format('MMMM D, YYYY')}
              </time>
              <h2>{title}</h2>
              <ViewPointer slug={slug} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PostList;
