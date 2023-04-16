'use client';

import { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import { getInteraction } from '@/utils';

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
  const [is조회, setIs조회] = useState(true);

  useLayoutEffect(() => {
    setIs조회(getInteraction(slug).조회);
  }, []);

  if (is조회) {
    return null;
  }

  return <Pointer />;
}

export default ViewPointer;
