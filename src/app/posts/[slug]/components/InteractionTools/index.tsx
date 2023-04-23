import {
  EmptyLikeIcon,
  FilledLikeIcon,
} from '@/app/posts/[slug]/components/Icons';
import { useLike } from '@/hooks/useLike';

import { Button, Wrapper } from './styles';

interface Props {
  slug: string;
}

function InteractionTools({ slug }: Props) {
  const [isLiked, setIsLiked] = useLike(slug);
  const like = () => setIsLiked(!isLiked);

  return (
    <Wrapper>
      {isLiked ? (
        <Button
          aria-label="like this content"
          data-tooltip="42"
          onClick={like}
          type="button"
        >
          <FilledLikeIcon />
        </Button>
      ) : (
        <Button
          aria-label="dislike this content"
          data-tooltip="42"
          onClick={like}
          type="button"
        >
          <EmptyLikeIcon />
        </Button>
      )}
    </Wrapper>
  );
}

export default InteractionTools;
