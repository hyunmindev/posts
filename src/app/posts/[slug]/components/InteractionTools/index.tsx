import { useEffect } from 'react';

import {
  EmptyLikeIcon,
  FilledLikeIcon,
} from '@/app/posts/[slug]/components/Icons';
import { useInteraction } from '@/hooks/useInteraction';
import { useUserID } from '@/hooks/useUserID';

import { Button, Wrapper } from './styles';

interface Props {
  slug: string;
}

function InteractionTools({ slug }: Props) {
  const userID = useUserID();

  const {
    조회: [, setIs조회],
    좋아요: [is좋아요, setIs좋아요],
  } = useInteraction(userID, slug);

  useEffect(() => {
    setIs조회(true);
  }, []);

  const handleClick좋아요 = () => setIs좋아요(!is좋아요);

  if (!userID) {
    return null;
  }

  return (
    <Wrapper>
      {is좋아요 ? (
        <Button
          aria-label="like this content"
          data-tooltip="42"
          onClick={handleClick좋아요}
          type="button"
        >
          <FilledLikeIcon />
        </Button>
      ) : (
        <Button
          aria-label="dislike this content"
          data-tooltip="42"
          onClick={handleClick좋아요}
          type="button"
        >
          <EmptyLikeIcon />
        </Button>
      )}
    </Wrapper>
  );
}

export default InteractionTools;
