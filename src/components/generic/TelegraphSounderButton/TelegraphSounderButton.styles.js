import styled from 'styled-components';

const TelegraphSounderButtonContainer = styled.button`
  width: 25.6rem;
  height: 25.6rem;

  margin-bottom: 2rem;

  background-color: ${({ theme: { colors } }) => colors.primary};

  outline: none;
  border: none;
  border-radius: 50%;

  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));

  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    cursor: pointer;

    background-color: ${({ theme: { colors } }) => colors.tints.primaryTint_20};
  }

  &:active {
    background-color: ${({ theme: { colors } }) => colors.tints.primaryTint_10};
  }
`;

export default TelegraphSounderButtonContainer;
