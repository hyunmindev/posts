import Link from 'next/link';

import { getPosts } from '@/services/post';

import styles from './index.module.scss';

async function PostList() {
  const posts = await getPosts();
  return (
    <ul className={styles['post-list']}>
      {posts.map(({ category, createdTime, slug, title }) => (
        <li
          key={slug}
          className={styles.post}
        >
          <Link href={`/posts/${slug}`}>
            <p className="category">{category}</p>
            <p className="created-time">{createdTime.format('MMMM D, YYYY')}</p>
            <h2 className="title">{title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
