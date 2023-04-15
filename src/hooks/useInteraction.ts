import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const getInteraction = (slug: string): Interaction =>
  JSON.parse(localStorage.getItem(slug) ?? '{}');

const setInteraction = (slug: string, interaction: Partial<Interaction>) =>
  localStorage.setItem(
    slug,
    JSON.stringify({ ...getInteraction(slug), ...interaction })
  );

interface Interaction {
  공유: boolean;
  조회: boolean;
  좋아요: boolean;
}

function useDebounce<T>(value: T, delay: number): T {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

export const useInteraction = (
  // @ts-ignore
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

  const debouncedIs좋아요 = useDebounce(is좋아요, 500);

  useEffect(() => {
    setInteraction(slug, { 좋아요: debouncedIs좋아요 });
  }, [debouncedIs좋아요, slug]);

  useEffect(() => {
    setInteraction(slug, { 공유: is공유 });
  }, [is공유, slug]);

  useEffect(() => {
    setInteraction(slug, { 조회: is조회 });
  }, [is조회, slug]);

  return {
    공유: [is공유, setIs공유],
    조회: [is조회, setIs조회],
    좋아요: [is좋아요, setIs좋아요],
  };
};
