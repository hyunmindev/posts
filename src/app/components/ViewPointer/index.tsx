'use client';

import { useEffect, useRef, useState } from 'react';

import { getIsViewed } from '@/utils/localStorage';

interface Props {
  slug: string;
}

function ViewPointer({ slug }: Props) {
  const [isViewed, setIsViewed] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsViewed(getIsViewed(slug));
  }, []);

  useEffect(() => {
    if (ref.current && !isViewed) {
      ref.current.classList.remove('invisible');
      ref.current.classList.remove('opacity-0');
    }
  }, [isViewed]);

  return (
    <div
      ref={ref}
      className="invisible absolute right-4 top-4 h-2 w-2 rounded-sm bg-amber-500 opacity-0 transition-opacity duration-500"
    />
  );
}

export default ViewPointer;
