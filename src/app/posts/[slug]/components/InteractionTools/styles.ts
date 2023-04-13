import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: column;
  align-items: end;
  border-right: 1px solid #666;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  padding: 0;
  margin: 0.4rem 0.8rem;
  background: none;
  border: solid #666;

  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: #666;
  }
`;
