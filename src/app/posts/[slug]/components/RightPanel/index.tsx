'use client';

import ScrollButtons from '@/app/posts/[slug]/components/ScrollButtons';
import TableOfContents from '@/app/posts/[slug]/components/TableOfContents';
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
