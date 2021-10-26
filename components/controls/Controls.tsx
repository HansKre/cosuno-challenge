import styled from 'styled-components';
import { Search, Filter } from 'components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default function Controls() {
  return (
    <Container>
      <Search />
      <Filter />
    </Container>
  );
}
