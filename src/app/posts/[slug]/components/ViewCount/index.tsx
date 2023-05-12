'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  slug: string;
}

function ViewCount({ slug }: Props) {
  const [viewCount, setViewCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    fetch(`/api/views?slug=${slug}`, {
      method: 'GET',
      next: { revalidate: 120 },
    })
      .then((res) => res.json())
      .then(setViewCount);
  }, []);

  useEffect(() => {
    let count = 0;
    if (viewCount === 0) {
      return () => {};
    }
    const timer = setInterval(() => {
      if (count < viewCount) {
        count += Math.ceil(viewCount / 10);
        ref.current!.innerText = count.toLocaleString();
      } else {
        ref.current!.innerText = viewCount.toLocaleString();
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [viewCount]);

  return <p ref={ref}>0</p>;
}

export default ViewCount;
