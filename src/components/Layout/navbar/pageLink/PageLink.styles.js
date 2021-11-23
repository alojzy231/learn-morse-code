import styled from 'styled-components';

const StyledPageLink = styled.a`
  width: 6.4rem;
  height: 6.4rem;

  &:hover {
    opacity: 0.6;
  }

  @media ${({ theme: { medias } }) => medias.mobile} {
    transform: rotateZ(-90deg);
  }
`;

export default StyledPageLink;
