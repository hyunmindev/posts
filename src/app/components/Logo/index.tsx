import { firaMono } from '@/styles/font';
import { join } from '@/utils';

import styles from './index.module.scss';

function Logo() {
  return (
    <a
      className={styles.logo}
      href="/"
    >
      <h1 className={join(styles.name, firaMono.className)}>
        Hyunmin
        <br />
        Jung
      </h1>
      <p className={join(styles.job, firaMono.className)}>
        front-end Developer
      </p>
    </a>
  );
}

export default Logo;
