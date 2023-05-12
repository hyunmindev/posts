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
      <main className="w-screen max-w-screen-xl grow">
        {/* FIXME: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching */}
        {/* @ts-expect-error Async Server Component */}
        <PostList />
      </main>
    </>
  );
}

export default Index;
