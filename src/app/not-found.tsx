import IndexHeader from '@/app/components/IndexHeader';

function NotFound() {
  return (
    <>
      <IndexHeader />
      <main className="container">
        <h1>Page Not Found</h1>
        <a href="/">홈으로 가기</a>
      </main>
    </>
  );
}

export default NotFound;
