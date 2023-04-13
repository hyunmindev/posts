import { FilledLikeIcon } from '@/app/posts/[slug]/components/Icons';

import { Button, Wrapper } from './styles';

function InteractionTools() {
  return (
    <Wrapper>
      <Button
        aria-label="like this content"
        type="button"
      >
        <FilledLikeIcon />
      </Button>
    </Wrapper>
  );
}

export default InteractionTools;
