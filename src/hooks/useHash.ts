import { useCallback, useEffect, useState } from 'react';

export const useHash = (): [string, (hash: string) => void] => {
  const [hash, setHash] = useState('');

  const hashChangeHandler = useCallback(() => {
    setHash(decodeURI(window.location.hash).substring(1));
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);
    return () => window.removeEventListener('hashchange', hashChangeHandler);
  }, []);

  const updateHash = useCallback(
    (newHash: string) => {
      if (newHash !== hash) {
        window.location.hash = `#${newHash}`;
      }
    },
    [hash]
  );

  return [hash, updateHash];
};

export const useHashEffect = (callback: (hash: string) => void) => {
  const [hash] = useHash();
  useEffect(() => {
    callback(hash);
  }, [hash]);
};
