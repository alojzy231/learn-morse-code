import styled from 'styled-components';

export const PageLinkHighlightContainer = styled.div`
  width: 100%;
  position: absolute;
  top: ${({ indexOfCurrentRoute }) => `${indexOfCurrentRoute * 33.33}%`};

  transform: translateY(-3.6rem);
  z-index: -1;

  transition: ease 0.05s;
`;

export const Middle = styled.div`
  width: 100%;
  height: 7.2rem;

  border-radius: 0 50% 50% 0;

  background-color: ${({ theme: { colors } }) => colors.secondary};
`;
export const Side = styled.div`
  width: 50%;
  height: 3.6rem;

  background-color: ${({ theme: { colors } }) => colors.secondary};

  &:after {
    height: 3.6rem;
    width: 3.6rem;
    display: block;
    content: '';
    border-radius: ${({ isBottom }) => (isBottom ? '100% 0 0 0' : '0 0 0 100%')};
    background-color: ${({ theme: { colors } }) => colors.background};
  }
`;
