import styled from 'styled-components';

const Dot = styled.div`
  height: 1.6rem;
  width: 1.6rem;
  margin: 0 0.4rem;
  border-radius: 50%;

  background-color: ${({ theme: { colors }, isWritten }) =>
    isWritten ? colors.black : colors.disabled};
`;

export default Dot;
