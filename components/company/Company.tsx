import { CompanyName } from './CompanyName';
import { Container } from './Container';
import { Img } from './Img';
import { Location } from './Location';
import { Row } from './Row';
import { Specialties } from './Specialties';
import { TextContainer } from './TextContainer';

interface Props {
  name: string;
  location: string;
  specialties: string;
  logoImg: string;
}

export default function Card({ name, location, specialties, logoImg }: Props) {
  return (
    <Container className='company'>
      <Row>
        <TextContainer>
          <CompanyName>{name}</CompanyName>
          <Location>{location}</Location>
          <Specialties>{specialties}</Specialties>
        </TextContainer>
        <Img src={logoImg} alt='Company Logo' />
      </Row>
    </Container>
  );
}
