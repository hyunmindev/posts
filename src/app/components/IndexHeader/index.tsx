import Logo from '@/app/components/Logo';

function IndexHeader() {
  return (
    <header className="w-screen max-w-screen-xl p-8">
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
