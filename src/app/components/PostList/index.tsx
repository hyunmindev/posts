import Link from 'next/link';

import { getDatabase, getPosts } from '@/services/notion';
import categoryStyles from '@/styles/modules/category.module.scss';
import { join } from '@/utils';

import styles from './index.module.scss';

async function PostList() {
  const [posts, database] = await Promise.all([getPosts(), getDatabase()]);

  return (
    <ul className={styles.postList}>
      {posts.map(({ category, createdTime, slug, title }) => {
        const { color } = database.categories[category] as { color: string };
        return (
          <li
            key={slug}
            className={styles.post}
          >
            <Link href={`/posts/${slug}`}>
              <p
                className={join(categoryStyles.default, categoryStyles[color])}
              >
                {category}
              </p>
              <time dateTime={createdTime.format('YYYY-MM-DD')}>
                {createdTime.format('MMMM D, YYYY')}
              </time>
              <h2>{title}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PostList;
