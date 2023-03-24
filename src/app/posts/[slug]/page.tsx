import sanitizeHtml from 'sanitize-html';

import { firaMono, nanumGothicCoding } from '@/constants/font';
import { getPost } from '@/services/notion';
import { join } from '@/utils';

import PostHeader from './components/PostHeader';
import styles from './page.module.scss';

interface Props {
  params: {
    slug: string;
  };
}

async function Post({ params }: Props) {
  const post = await getPost(params.slug);
  const { content = '', title } = post;

  return (
    <>
      <PostHeader />
      <main className="container">
        <article
          className={join(
            styles.post,
            firaMono.variable,
            nanumGothicCoding.variable
          )}
        >
          <h1 className={styles.title}>{title}</h1>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} />
        </article>
      </main>
    </>
  );
}

export default Post;
