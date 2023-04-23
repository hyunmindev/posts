import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import { useDebounce } from '@/hooks/useDebounce';
import { getUserID } from '@/utils/localStorage';

export const useLike = (
  slug: string
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const debouncedIsLiked = useDebounce(isLiked, 1000);

  const first = useRef<boolean>(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const userID = getUserID();
    fetch('/api/likes', {
      body: JSON.stringify({ slug, userID }),
      method: 'PUT',
    });
  }, [debouncedIsLiked]);

  return [isLiked, setIsLiked];
};
