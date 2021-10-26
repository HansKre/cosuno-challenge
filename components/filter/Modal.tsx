import theme from '@root/styles/theme';
import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  z-index: 2;
  left: calc(50% - 220px);
  top: 130px;
  width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.palette.grayishViolet};
  border-radius: ${theme.borderRadius};
  padding: ${theme.paddingTB};
`;
