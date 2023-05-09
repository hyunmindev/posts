import { type Metadata } from 'next';

import ClientProcess from '@/app/posts/[slug]/components/ClientProcess';
import CommentPanel from '@/app/posts/[slug]/components/CommentPanel';
import MetaPanel from '@/app/posts/[slug]/components/MetaPanel';
import PostHeader from '@/app/posts/[slug]/components/PostHeader';
import RightPanel from '@/app/posts/[slug]/components/RightPanel';
import { getPost, getPosts } from '@/services/notion';
import { getLD, getMetadata } from '@/utils/seo';

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
  const ld = getLD(post);
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
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        type="application/ld+json"
      />
      <PostHeader />
      <main className="grid grow gap-4 xl:grid-cols-[160px_minmax(0,768px)_160px]">
        <article className="col-start-2 max-w-[768px]">
          <h1 className="stroke-stone-900 text-5xl font-bold">{title}</h1>
          <p className="text-stone-400">{description}</p>
          <MetaPanel
            content={content}
            createdTime={createdTime}
            lastEditedTime={lastEditedTime}
            slug={slug}
          />
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <CommentPanel />
        </article>
        <RightPanel toc={toc} />
      </main>
    </ClientProcess>
  );
}

export default Post;
