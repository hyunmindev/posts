'use client';

import TableOfContents from 'src/app/posts/[slug]/components/TableOfContents';

import ScrollButtons from '@/app/posts/[slug]/components/ScrollButtons';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { TOC } from '@/types/notion';

interface Props {
  toc: TOC[];
}

function RightPanel({ toc }: Props) {
  const { lessThanXL } = useBreakpoint();

  if (lessThanXL) {
    return null;
  }

  return (
    <div className="col-start-3">
      <TableOfContents toc={toc} />
      <ScrollButtons />
    </div>
  );
}

export default RightPanel;
