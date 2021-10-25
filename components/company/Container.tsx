import theme from '@styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 413px;
  height: 200px;
  border-radius: ${theme.borderRadius};
  padding: ${theme.paddingCard};
  border: solid;
  border-color: ${theme.palette.grayishViolet};
  border-width: 1px;
  margin: ${theme.margin};
  background-color: ${theme.palette.cardBackground};
  &:hover {
    outline: auto;
  }
`;
