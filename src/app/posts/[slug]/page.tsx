import { type Metadata } from 'next';

import ClientProcess from '@/app/posts/[slug]/components/ClientProcess';
import CommentPanel from '@/app/posts/[slug]/components/CommentPanel';
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
    <ClientProcess slug={slug}>
      <PostHeader />
      <main className="container">
        <article className="post">
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
          <CommentPanel />
        </article>
      </main>
    </ClientProcess>
  );
}

export default Post;
