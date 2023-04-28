import styled from 'styled-components';

interface PointerProps {
  translateY: number;
}

export const Pointer = styled.div<PointerProps>`
  width: 0;
  height: 0;
  overflow: hidden;
  border-color: transparent transparent transparent #666;
  border-style: solid;
  border-width: 5px 0 5px 5px;
  transition: transform 0.1s ease-in-out;
  transform: ${({ translateY }) => `translateY(${translateY}rem);`};
`;
