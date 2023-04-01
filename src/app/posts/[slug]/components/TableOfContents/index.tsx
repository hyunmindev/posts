'use client';

import { useEffect, useState } from 'react';

import { useHashEffect } from '@/hooks/useHash';
import type { TOC } from '@/types/notion';

import styles from './index.module.scss';

interface Props {
  toc: TOC[];
}

function TableOfContents({ toc }: Props) {
  const [visibleIDs, setVisibleIDs] = useState<string[]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

  /* h2, h3, h4 io */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries
        .filter(({ intersectionRatio }) => intersectionRatio > 0)
        .map(({ target }) => target.id);
      const hiddenEntries = entries
        .filter(({ intersectionRatio }) => intersectionRatio === 0)
        .map(({ target }) => target.id);
      setVisibleIDs((prevState) => {
        return [
          ...prevState
            .filter((id) => !hiddenEntries.includes(id))
            .concat(visibleEntries),
        ];
      });
    });
    const sections = document.querySelectorAll('h2, h3, h4');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* h1 io */
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry!.isIntersecting) {
        setVisibleIDs([]);
        setCurrentSectionIndex(0);
      }
    });
    const section = document.querySelector('h1')!;
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visibleIDs.length !== 0) {
      setCurrentSectionIndex(toc.findIndex(({ id }) => visibleIDs[0] === id));
    }
  }, [JSON.stringify(visibleIDs)]);

  useHashEffect((hash) => {
    if (hash === '') {
      return;
    }
    setTimeout(
      () => setCurrentSectionIndex(toc.findIndex(({ id }) => hash === id)),
      25
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
