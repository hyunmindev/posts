import Link from 'next/link';

import IndexHeader from '@/app/components/IndexHeader';

function NotFound() {
  return (
    <>
      <IndexHeader />
      <main className="container">
        <h1>Page Not Found</h1>
        <Link href="/">홈으로 가기</Link>
      </main>
    </>
  );
}

export default NotFound;
