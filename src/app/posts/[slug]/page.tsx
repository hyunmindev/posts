import { firaMono, nanumGothic } from '@/constants/font';
import { getPost } from '@/services/notion';
import { join } from '@/utils';

import PostHeader from './components/PostHeader';
import TableOfContents from './components/TableOfContents';
import styles from './page.module.scss';

interface Props {
  params: {
    slug: string;
  };
}

async function Post({ params }: Props) {
  const post = await getPost(params.slug);
  const { content = '', description, title, toc = [] } = post;

  return (
    <>
      <PostHeader />
      <main className="container">
        <article className={join(styles.post, nanumGothic.className)}>
          <TableOfContents toc={toc} />
          <h1 className={firaMono.className}>{title}</h1>
          <p>{description}</p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </main>
    </>
  );
}

export default Post;
