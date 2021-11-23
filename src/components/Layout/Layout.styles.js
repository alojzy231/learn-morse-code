import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;

  @media ${({ theme: { medias } }) => medias.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
