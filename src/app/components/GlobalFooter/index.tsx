import { NAME } from '@/constants/meta';

import styles from './index.module.scss';

function GlobalFooter() {
  return (
    <footer className={styles.footer}>
      © 2023. {NAME}. All rights reserved.
    </footer>
  );
}

export default GlobalFooter;
