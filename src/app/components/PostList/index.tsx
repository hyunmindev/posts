import { getPosts } from '@/services/post';

async function PostList() {
  const posts = await getPosts();
  return posts.map(({ slug, title }) => (
    <article key={slug}>
      <h2>{title}</h2>
    </article>
  ));
}

export default PostList;
