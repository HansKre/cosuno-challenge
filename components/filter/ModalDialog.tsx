import { useContext } from 'react';
import CompaniesContext from 'contexts/companies';
import { Blur } from './Blur';
import Checkbox from './Checkbox';
import { Column } from './Column';
import { DialogTitle } from './DialogTitle';
import { Modal } from './Modal';
import { Button } from './Button';
import { ICompany } from 'types';

interface IProps {
  visible: boolean;
  onClick: () => void;
}
export default function ModalDialog({ visible, onClick }: IProps) {
  const companiesContext = useContext(CompaniesContext);
  const { companies, specialtiesFilter } = companiesContext.state;
  const { dispatch } = companiesContext;

  function handleChange(
    e: React.FormEvent<HTMLInputElement>,
    specialty: string
  ) {
    if (e.currentTarget.checked) {
      dispatch({ type: 'addSpecialty', specialty: specialty });
    } else {
      dispatch({ type: 'removeSpecialty', specialty: specialty });
    }
  }

  return visible ? (
    <>
      <Blur onClick={onClick} />
      <Modal>
        <Column>
          <DialogTitle>Filter</DialogTitle>
          {companies &&
            uniqueSpecialties(companies).map((specialty) => (
              <Checkbox
                key={specialty}
                label={specialty}
                checked={specialtiesFilter.includes(specialty)}
                onChange={(e) => handleChange(e, specialty)}
              />
            ))}
          <Button onClick={onClick}>Ok</Button>
        </Column>
      </Modal>
    </>
  ) : (
    <></>
  );
}
function uniqueSpecialties(companies: ICompany[]) {
  return companies.reduce<string[]>((uniqueSpecialties, company) => {
    company.specialties.forEach((specialty) => {
      if (!uniqueSpecialties.includes(specialty))
        uniqueSpecialties.push(specialty);
    });
    return uniqueSpecialties;
  }, []);
}
