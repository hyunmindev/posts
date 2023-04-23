'use client';

import { PropsWithChildren, useEffect } from 'react';

import { getUserID, incrementViewCount } from '@/utils/localStorage';

interface Props {
  slug: string;
}

function ViewCounter({ children, slug }: PropsWithChildren<Props>) {
  useEffect(() => {
    const userID = getUserID();
    incrementViewCount(slug);
    fetch('/api/views', {
      body: JSON.stringify({ slug, userID }),
      method: 'PUT',
    });
  }, []);

  return <>{children}</>;
}

export default ViewCounter;
