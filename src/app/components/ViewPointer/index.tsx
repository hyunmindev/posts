'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getIsViewed } from '@/utils/localStorage';

interface Props {
  slug: string;
}

const Pointer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 6px;
  height: 6px;
  background-color: #9e7a11;
  border-radius: 3px;
`;

function ViewPointer({ slug }: Props) {
  const [isViewed, setIsViewed] = useState(true);

  useEffect(() => {
    setIsViewed(getIsViewed(slug));
  }, []);

  if (isViewed) {
    return null;
  }

  return <Pointer />;
}

export default ViewPointer;
