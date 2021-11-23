import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 7.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme: { medias } }) => medias.mobile} {
    margin-top: -3.6rem;
    transform: rotateZ(90deg);
  }
`;

export const NavbarWrapper = styled.nav`
  width: 7.2rem;
  height: 14.4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
`;
