import theme from '@styles/theme';
import styled from 'styled-components';

const Input = styled.input`
  border-radius: ${theme.borderRadius};
  padding: ${theme.paddingTBLR};
  border: solid;
  border-color: ${theme.palette.grayishViolet};
  border-width: 1px;
`;

export default function Search() {
  return (
    <Input
      type='search'
      name='search'
      id='search'
      placeholder='Company name ...'
    />
  );
}
