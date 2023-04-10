'use client';

import ContentUtils from '@/app/posts/[slug]/components/ContentUtils';
import TableOfContents from '@/app/posts/[slug]/components/TableOfContents';
import { TOC } from '@/types/notion';

import { Wrapper } from './styles';

interface Props {
  toc: TOC[];
}

function RightPanel({ toc }: Props) {
  return (
    <Wrapper>
      <TableOfContents toc={toc} />
      <ContentUtils />
    </Wrapper>
  );
}

export default RightPanel;
