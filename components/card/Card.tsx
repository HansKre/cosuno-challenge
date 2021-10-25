import { CompanyName } from './CompanyName';
import { Container } from './Container';
import { Img } from './Img';
import { Location } from './Location';
import { Row } from './Row';
import { Specialties } from './Specialties';
import { TextContainer } from './TextContainer';

export default function Card() {
  return (
    <Container>
      <Row>
        <TextContainer>
          <CompanyName>Cosuno GmbH</CompanyName>
          <Location>Berlin</Location>
          <Specialties>Excavation, Plumbing, Electrical</Specialties>
        </TextContainer>
        <Img src='https://picsum.photos/100' alt='Company Logo' />
      </Row>
    </Container>
  );
}
