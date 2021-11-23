import styled from 'styled-components';

import { Header2 } from '../../styles/Typography.styles';

const PageTitle = styled.h1`
  margin: 1rem 2rem 0 2rem;
  text-align: center;
  @media ${({ theme: { medias } }) => medias.mobile} {
    ${Header2};
    font-weight: bold;
  }
`;

export default PageTitle;
