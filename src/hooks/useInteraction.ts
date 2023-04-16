import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useDebounce } from '@/hooks/useDebounce';
import { getInteraction, setInteraction } from '@/utils';

export const useInteraction = (
  userID: string | null,
  slug: string
): {
  공유: [boolean, Dispatch<SetStateAction<boolean>>];
  조회: [boolean, Dispatch<SetStateAction<boolean>>];
  좋아요: [boolean, Dispatch<SetStateAction<boolean>>];
} => {
  const [is좋아요, setIs좋아요] = useState<boolean>(
    getInteraction(slug).좋아요 ?? false
  );
  const [is공유, setIs공유] = useState<boolean>(
    getInteraction(slug).공유 ?? false
  );
  const [is조회, setIs조회] = useState<boolean>(
    getInteraction(slug).조회 ?? false
  );

  const debouncedIs좋아요 = useDebounce(is좋아요, 1000);

  useEffect(() => {
    setInteraction(slug, { 좋아요: debouncedIs좋아요 });
    fetch('/api/interactions', {
      body: JSON.stringify({ userID }),
      method: 'PUT',
    });
  }, [debouncedIs좋아요, userID]);
  useEffect(() => {
    setInteraction(slug, { 공유: is공유 });
  }, [is공유]);
  useEffect(() => {
    setInteraction(slug, { 조회: is조회 });
  }, [is조회]);

  return {
    공유: [is공유, setIs공유],
    조회: [is조회, setIs조회],
    좋아요: [is좋아요, setIs좋아요],
  };
};
