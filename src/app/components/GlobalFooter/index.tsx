import { NAME } from '@/constants/meta';
import { join } from '@/utils';

import styles from './index.module.scss';

function GlobalFooter() {
  return (
    <footer className={join(styles.footer, 'container')}>
      © 2023. {NAME}. All rights reserved.
    </footer>
  );
}

export default GlobalFooter;
