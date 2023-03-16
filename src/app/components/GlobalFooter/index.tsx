import { join } from '@/utils';

import styles from './index.module.scss';

function GlobalFooter() {
  return (
    <footer className={join(styles.footer, 'container')}>
      © 2023. Hyunmin Jung. All rights reserved.
    </footer>
  );
}

export default GlobalFooter;
