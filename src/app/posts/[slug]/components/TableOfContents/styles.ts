import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: 80px;
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
