import Logo from '@/app/components/Logo';
import { join } from '@/utils';

function IndexHeader() {
  return (
    <header className={join('header', 'container')}>
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
