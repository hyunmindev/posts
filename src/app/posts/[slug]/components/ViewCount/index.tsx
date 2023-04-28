'use client';

import { useEffect, useState } from 'react';

interface Props {
  slug: string;
}

function ViewCount({ slug }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    fetch(`/api/views?slug=${slug}`, {
      method: 'GET',
      next: { revalidate: 120 },
    })
      .then((res) => res.json())
      .then((data) => {
        setViewCount(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <p
      aria-busy={isLoading}
      className="text"
    >
      {isLoading ? '' : viewCount}
    </p>
  );
}

export default ViewCount;
