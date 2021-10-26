import CompaniesContext from '@contextscompanies';
import React, { useContext, useState } from 'react';
import { Blur } from './Blur';
import Checkbox from './Checkbox';
import { Column } from './Column';
import { DialogTitle } from './DialogTitle';
import { FilterIconActive, FilterIcon } from './Icons';
import { Modal } from './Modal';
import { Button } from './Button';

export default function Filter() {
  const companiesContext = useContext(CompaniesContext);
  const { companies, specialtiesFilter } = companiesContext.state;
  const { dispatch } = companiesContext;

  const [visible, setVisible] = useState(false);
  function handleClick() {
    setVisible((prev) => !prev);
  }
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
  return (
    <>
      {specialtiesFilter.length > 0 ? (
        <FilterIconActive onClick={handleClick} style={{ fontSize: '2rem' }} />
      ) : (
        <FilterIcon onClick={handleClick} style={{ fontSize: '2rem' }} />
      )}
      {visible && (
        <>
          <Blur onClick={handleClick} />
          <Modal>
            <Column>
              <DialogTitle>Filter</DialogTitle>
              {companies &&
                companies
                  .reduce<string[]>((uniqueSpecialties, company) => {
                    company.specialties.forEach((specialty) => {
                      if (!uniqueSpecialties.includes(specialty))
                        uniqueSpecialties.push(specialty);
                    });
                    return uniqueSpecialties;
                  }, [])
                  .map((specialty) => (
                    <Checkbox
                      key={specialty}
                      label={specialty}
                      checked={specialtiesFilter.includes(specialty)}
                      onChange={(e) => handleChange(e, specialty)}
                    />
                  ))}
              <Button onClick={handleClick}>Ok</Button>
            </Column>
          </Modal>
        </>
      )}
    </>
  );
}
