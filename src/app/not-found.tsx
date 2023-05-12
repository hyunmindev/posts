function NotFound() {
  return (
    <main className="flex grow flex-col items-center gap-4 p-32">
      <h1 className="text-shadow-4 animate-bounce text-9xl text-stone-200">
        404
      </h1>
      <a
        className="text-center text-xl text-stone-400"
        href="/"
      >
        홈으로 가기
      </a>
    </main>
  );
}

export default NotFound;
