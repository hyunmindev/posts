import Logo from '@/app/components/Logo';

function PostHeader() {
  return (
    <header className={['header', 'container'].join(' ')}>
      <nav>
        <ul>
          <li>
            <Logo />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default PostHeader;
