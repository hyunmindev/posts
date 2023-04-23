import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  border-left: 1px solid #666;
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
  border: 1px solid #666;

  svg {
    width: 1.4rem;
    height: 1.4rem;
    fill: #666;
    stroke: #666;
    stroke-width: 36;
  }
`;
