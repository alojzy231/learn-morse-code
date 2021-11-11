import styled from 'styled-components';

const Dash = styled.div`
  height: 0.8rem;
  width: 3.2rem;
  margin: 0 0.4rem;

  background-color: ${({ theme: { colors }, isWritten }) =>
    isWritten ? colors.black : colors.disabled};
`;

export default Dash;
