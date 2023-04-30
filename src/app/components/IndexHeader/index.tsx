import Logo from '@/app/components/Logo';

function IndexHeader() {
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

export default IndexHeader;
