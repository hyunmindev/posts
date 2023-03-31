import { NAME } from '@/constants/meta';
import { firaMono } from '@/styles/font';
import { join } from '@/utils';

import styles from './index.module.scss';

function GlobalFooter() {
  return (
    <footer className={join('container', styles.footer, firaMono.className)}>
      © 2023. {NAME}. All rights reserved.
    </footer>
  );
}

export default GlobalFooter;
