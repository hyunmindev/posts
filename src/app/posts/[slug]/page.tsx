import { type Metadata } from 'next';
import ViewCounter from 'src/app/posts/[slug]/components/ViewCounter';

import LeftPanel from '@/app/posts/[slug]/components/LeftPanel';
import MetaPanel from '@/app/posts/[slug]/components/MetaPanel';
import PostHeader from '@/app/posts/[slug]/components/PostHeader';
import RightPanel from '@/app/posts/[slug]/components/RightPanel';
import { getPost, getPosts } from '@/services/notion';
import { getMetadata } from '@/utils';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  return getMetadata(await getPost(slug));
}

export async function generateStaticParams() {
  return (await getPosts()).map(({ slug }) => ({ slug }));
}

async function Post({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const {
    content = '',
    createdTime,
    description,
    lastEditedTime,
    title,
    toc = [],
  } = post;

  return (
    <ViewCounter slug={slug}>
      <PostHeader />
      <main className="container">
        <article className="post">
          <LeftPanel slug={slug} />
          <RightPanel toc={toc} />
          <h1>{title}</h1>
          <p className="description">{description}</p>
          <MetaPanel
            content={content}
            createdTime={createdTime}
            lastEditedTime={lastEditedTime}
            slug={slug}
          />
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </main>
    </ViewCounter>
  );
}

export default Post;
