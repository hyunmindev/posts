'use client';

import TOCPointer from '@/app/posts/[slug]/components/TOCPointer';
import type { TOC } from '@/types/notion';

interface Props {
  toc: TOC[];
}

const PADDING_LEFT = { h2: 0, h3: 15, h4: 30 };

function TableOfContents({ toc }: Props) {
  if (toc.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-20 mt-8 border-l-2 border-stone-600 pl-4 text-sm text-stone-400">
      <TOCPointer toc={toc} />
      <ul>
        {toc.map(({ id, tagName, text }) => (
          <li
            key={id}
            className="w-full py-1"
            style={{ paddingLeft: `${PADDING_LEFT[tagName]}px` }}
          >
            <a
              className="block truncate"
              href={`#${id}`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
