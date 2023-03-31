'use client';

import { useEffect, useState } from 'react';

import { useHashEffect } from '@/hooks/useHash';
import type { TOC } from '@/types/notion';

import styles from './index.module.scss';

interface Props {
  toc: TOC[];
}

function TableOfContents({ toc }: Props) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

  const [visibleIDs, setVisibleIDs] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries
        .filter(({ intersectionRatio }) => intersectionRatio === 1)
        .map(({ target }) => target.id);
      const hiddenEntries = entries
        .filter(({ intersectionRatio }) => intersectionRatio !== 1)
        .map(({ target }) => target.id);
      setVisibleIDs((prevState) => {
        const set = new Set(prevState);
        visibleEntries.forEach((id) => set.add(id));
        hiddenEntries.forEach((id) => set.delete(id));
        return Array.from(set);
      });
    });
    const sections = document.querySelectorAll('h2, h3, h4');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visibleIDs.length !== 0) {
      setCurrentSectionIndex(
        toc.findIndex(({ id }) => visibleIDs[visibleIDs.length - 1] === id)
      );
    }
  }, [JSON.stringify(visibleIDs)]);

  useHashEffect((hash) => {
    setTimeout(
      () => setCurrentSectionIndex(toc.findIndex(({ id }) => hash === id)),
      20
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <div
          className={styles.ticker}
          style={{
            transform: `translateY(${currentSectionIndex * 1.6 + 1}rem)`,
          }}
        />
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
    </div>
  );
}

export default TableOfContents;
