'use client';

import type { TOC } from '@/types/notion';

import styles from './index.module.scss';

interface Props {
  toc: TOC[];
}
function TableOfContents({ toc }: Props) {
  return (
    <div className={styles.container}>
      <ul className={styles.toc}>
        {toc.map(({ id, tagName, text }) => (
          <li
            key={id}
            className={styles[tagName]}
          >
            <a href={`#${id}`}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
