'use client';

import InteractionTools from 'src/app/posts/[slug]/components/InteractionTools';

import { useBreakpoint } from '@/hooks/useBreakpoint';

import { Wrapper } from './styles';

function LeftPanel() {
  const { lessThanXL } = useBreakpoint();
  if (lessThanXL) {
    return null;
  }
  return (
    <Wrapper>
      <InteractionTools />
    </Wrapper>
  );
}

export default LeftPanel;
