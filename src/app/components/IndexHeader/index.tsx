import Logo from '@/app/components/Logo';
import { join } from '@/utils';

import styles from './index.module.scss';

function IndexHeader() {
  return (
    <header className={join(styles.header, 'container')}>
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
