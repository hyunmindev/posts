import type { Metadata } from 'next';
import React from 'react';

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
      <main className="container">
        {/* FIXME: https://beta.nextjs.org/docs/data-fetching/fetching#asyncawait-in-server-components */}
        {/* @ts-expect-error Async Server Component */}
        <PostList />
      </main>
    </>
  );
}

export default Index;
