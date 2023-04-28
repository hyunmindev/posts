'use client';

import TOCPointer from '@/app/posts/[slug]/components/TOCPointer';
import type { TOC } from '@/types/notion';

import { Item, List, Wrapper } from './styles';

interface Props {
  toc: TOC[];
}

const PADDING_LEFT = { h2: 0, h3: 1, h4: 2 };

function TableOfContents({ toc }: Props) {
  return (
    <Wrapper>
      <TOCPointer toc={toc} />
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
    </Wrapper>
  );
}

export default TableOfContents;
