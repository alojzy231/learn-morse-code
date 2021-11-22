import styled from 'styled-components';

export const SelectAllButtonContainer = styled.button`
  margin-left: auto;

  display: block;

  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const SelectAllButtonText = styled.h3`
  color: ${({ theme: { colors } }) => colors.action};
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
