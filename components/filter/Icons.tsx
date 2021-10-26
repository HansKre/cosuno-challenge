import { IoFilterCircleOutline, IoFilterCircleSharp } from 'react-icons/io5';
import styled, { css } from 'styled-components';

const iconStyle = css`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: rotate(20deg);
  }
`;
export const FilterIconActive = styled(IoFilterCircleSharp)`
  ${iconStyle}
`;
export const FilterIcon = styled(IoFilterCircleOutline)`
  ${iconStyle}
`;
