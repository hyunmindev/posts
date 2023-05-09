import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      <p className="text-shadow-4 text-6xl text-stone-100">
        Hyunmin
        <br />
        Jung
      </p>
      <p className="mt-4 text-stone-400">front-end developer</p>
    </Link>
  );
}

export default Logo;
