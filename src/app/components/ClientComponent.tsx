'use client';

import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button,
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 96px;
    padding: 16px;
    margin: 0;
  }
`;

function ClientComponent() {
  const [state, setState] = useState(0);

  return (
    <Wrapper>
      <button
        onClick={() => setState(state - 1)}
        type="button"
      >
        -
      </button>
      <h3>{state}</h3>
      <button
        onClick={() => setState(state + 1)}
        type="button"
      >
        +
      </button>
    </Wrapper>
  );
}

export default ClientComponent;
