'use client';

import { useEffect, useState } from 'react';

interface Props {
  slug: string;
}

function ViewCount({ slug }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    fetch(`/api/views?slug=${slug}`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setViewCount(data);
        setIsLoading(false);
      });
  }, []);

  return <p aria-busy={isLoading}>{isLoading ? '' : viewCount}</p>;
}

export default ViewCount;
