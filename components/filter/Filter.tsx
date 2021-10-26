import CompaniesContext from '@contextscompanies';
import theme from '@root/styles/theme';
import React, { useContext, useState } from 'react';
import { IoFilterCircleOutline, IoFilterCircleSharp } from 'react-icons/io5';
import styled from 'styled-components';
import Checkbox from './Checkbox';

interface IProps {
  filtered: boolean;
}

const Blur = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgb(255, 255, 255, 0.85);
`;

const Modal = styled.div`
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

export default function Filter({ filtered }: IProps) {
  const companiesContext = useContext(CompaniesContext);
  const { companies, filteredCompanies, specialtiesFilter } =
    companiesContext.state;
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
      {filtered ? (
        <IoFilterCircleSharp
          onClick={handleClick}
          style={{ fontSize: '2rem' }}
        />
      ) : (
        <IoFilterCircleOutline
          onClick={handleClick}
          style={{ fontSize: '2rem' }}
        />
      )}
      {visible && (
        <>
          <Blur onClick={handleClick} />
          <Modal>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ alignSelf: 'center' }}>Filter</h2>
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
            </div>
            <button onClick={handleClick}>Ok</button>
          </Modal>
        </>
      )}
    </>
  );
}
