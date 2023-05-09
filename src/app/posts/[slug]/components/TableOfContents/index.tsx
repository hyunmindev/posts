'use client';

import TOCPointer from '@/app/posts/[slug]/components/TOCPointer';
import type { TOC } from '@/types/notion';

interface Props {
  toc: TOC[];
}

const PADDING_LEFT = { h2: 0, h3: 1, h4: 2 };

function TableOfContents({ toc }: Props) {
  if (toc.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-20">
      <TOCPointer toc={toc} />
      <ul>
        {toc.map(({ id, tagName, text }) => (
          <li
            key={id}
            paddingLeft={PADDING_LEFT[tagName]}
          >
            <a href={`#${id}`}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
