'use client';

import { useEffect, useState } from 'react';

import { useHashEffect } from '@/hooks/useHash';
import { TOC } from '@/types/notion';

interface Props {
  toc: TOC[];
}

function TOCPointer({ toc }: Props) {
  const [visibleIDs, setVisibleIDs] = useState<string[]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

  /* h2, h3, h4 io */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter(({ intersectionRatio }) => intersectionRatio > 0)
          .map(({ target }) => target.id);
        const hiddenEntries = entries
          .filter(({ intersectionRatio }) => intersectionRatio === 0)
          .map(({ target }) => target.id);
        setVisibleIDs((prevState) => [
          ...prevState
            .filter((id) => !hiddenEntries.includes(id))
            .concat(visibleEntries),
        ]);
      },
      { rootMargin: '-10% -10%', threshold: [0, 0.5, 1] }
    );
    const sections = document.querySelectorAll('h2, h3, h4');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* footer io */
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry!.isIntersecting) {
        setVisibleIDs([]);
        setCurrentSectionIndex(toc.length - 1);
      }
    });
    const section = document.querySelector('footer')!;
    observer.observe(section);
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
      50
    );
  });

  return (
    <div
      className="absolute left-0 border-y-8 border-l-8 border-y-transparent border-l-stone-600 border-r-transparent transition-transform"
      style={{
        transform: `translateY(${currentSectionIndex * 1.74 + 0.25}rem)`,
      }}
    />
  );
}

export default TOCPointer;
