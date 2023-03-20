import sanitizeHtml from 'sanitize-html';

import { firaMono } from '@/constants/font';
import { getPost } from '@/services/notion';

interface Props {
  params: {
    slug: string;
  };
}

async function Post({ params }: Props) {
  const post = await getPost(params.slug);
  const { content = '', title } = post;

  return (
    <main className="container">
      <h1 className={firaMono.className}>{title}</h1>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} />
    </main>
  );
}

export default Post;
