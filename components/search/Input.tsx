import theme from '@styles/theme';
import styled from 'styled-components';

export const Input = styled.input`
  border-radius: ${theme.borderRadius};
  padding: ${theme.paddingTBLR};
  border: solid;
  border-color: ${theme.palette.grayishViolet};
  border-width: 1px;
  &:focus,
  &:active,
  &:hover {
    border-color: ${theme.palette.primary};
  }
  &:focus-visible {
    outline: ${theme.palette.darkViolet} auto 1px;
  }
`;
