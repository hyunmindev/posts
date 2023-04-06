'use client';

import React, { useEffect, useState } from 'react';

import { useHashEffect } from '@/hooks/useHash';
import type { TOC } from '@/types/notion';

import { Content, Item, List, Pointer, Wrapper } from './styles';

interface Props {
  toc: TOC[];
}

const PADDING_LEFT = { h2: 0, h3: 1, h4: 2 };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <Wrapper>
      <Content>
        <Pointer translateY={currentSectionIndex * 1.6 + 1} />
        <List>
          {toc.map(({ id, tagName, text }) => (
            <Item
              key={id}
              paddingLeft={PADDING_LEFT[tagName]}
            >
              <a href={`#${id}`}>{text}</a>
            </Item>
          ))}
        </List>
      </Content>
    </Wrapper>
  );
}

export default TableOfContents;
