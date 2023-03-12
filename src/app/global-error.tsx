interface Props {
  reset: () => void;
}

function GlobalError({ reset }: Props) {
  return (
    <html lang="ko">
      <body>
        <h2>Something went wrong!</h2>
        <button
          onClick={reset}
          type="button"
        >
          Try again
        </button>
      </body>
    </html>
  );
}

export default GlobalError;
