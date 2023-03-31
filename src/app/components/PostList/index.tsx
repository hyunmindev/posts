import Link from 'next/link';

import { getDatabase, getPosts } from '@/services/notion';
import categoryStyles from '@/styles/category.module.scss';
import { firaMono } from '@/styles/font';
import { join } from '@/utils';

import styles from './index.module.scss';

async function PostList() {
  const [posts, database] = await Promise.all([getPosts(), getDatabase()]);

  return (
    <ul className={styles['post-list']}>
      {posts.map(({ category, createdTime, slug, title }) => {
        const { color } = database.categories[category] as { color: string };
        return (
          <li
            key={slug}
            className={styles.post}
          >
            <Link href={`/posts/${slug}`}>
              <p
                className={join(
                  categoryStyles.default,
                  categoryStyles[color],
                  firaMono.className
                )}
              >
                {category}
              </p>
              <time
                className={firaMono.className}
                dateTime={createdTime.format('YYYY-MM-DD')}
              >
                {createdTime.format('MMMM D, YYYY')}
              </time>
              <h2 className={firaMono.className}>{title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PostList;
