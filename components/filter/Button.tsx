import theme from 'styles/theme';
import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  padding: 0.5rem 0.5rem;
  width: 160%;
  border-radius: ${theme.borderRadius};
  margin: 1.5rem;
  align-self: center;
  background-color: ${theme.palette.primary};
  color: ${theme.palette.cardBackground};
  font-size: ${theme.typography.p};
  cursor: pointer;
  &:hover {
    background-color: ${theme.palette.veryDarkBlue};
  }
`;
