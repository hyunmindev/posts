import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: 80px;
`;

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

export const List = styled.ul`
  padding-left: 16px;
  margin: 0;
  border-left: 1px solid #666;
`;

interface ItemProps {
  paddingLeft: number;
}
export const Item = styled.li<ItemProps>`
  position: relative;
  height: 1.6rem;
  padding-left: ${({ paddingLeft }) => `${paddingLeft}rem`};
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.6rem;

  a {
    color: #8d8d8d;

    &:hover {
      color: #eee;
      transition-duration: 0.2s;
    }
  }
`;
