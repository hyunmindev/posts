'use client';

import InteractionTools from '@/app/posts/[slug]/components/InteractionTools';
import { useBreakpoint } from '@/hooks/useBreakpoint';

import { Wrapper } from './styles';

interface Props {
  slug: string;
}

function LeftPanel({ slug }: Props) {
  const { lessThanXL } = useBreakpoint();

  if (lessThanXL) {
    return null;
  }

  return (
    <Wrapper>
      <InteractionTools slug={slug} />
    </Wrapper>
  );
}

export default LeftPanel;
