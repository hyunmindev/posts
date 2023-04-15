'use client';

import ContentUtils from '@/app/posts/[slug]/components/ContentUtils';
import TableOfContents from '@/app/posts/[slug]/components/TableOfContents';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { TOC } from '@/types/notion';

import { Wrapper } from './styles';

interface Props {
  toc: TOC[];
}

function RightPanel({ toc }: Props) {
  const { lessThanXL } = useBreakpoint();

  if (lessThanXL) {
    return null;
  }

  return (
    <Wrapper>
      <TableOfContents toc={toc} />
      <ContentUtils />
    </Wrapper>
  );
}

export default RightPanel;
