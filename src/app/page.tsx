import type { Metadata } from 'next';

import IndexHeader from '@/app/components/IndexHeader';
import PostList from '@/app/components/PostList';
import { DEFAULT_METADATA } from '@/constants/meta';

export const metadata: Metadata = {
  ...DEFAULT_METADATA,
};

function Index() {
  return (
    <>
      <IndexHeader />
      <main className="w-screen max-w-screen-xl grow">
        <PostList />
      </main>
    </>
  );
}

export default Index;
