import { useContext, useState } from 'react';
import CompaniesContext from 'contexts/companies';
import { FilterIconActive, FilterIcon } from './Icons';
import ModalDialog from './ModalDialog';

export default function Filter() {
  const companiesContext = useContext(CompaniesContext);
  const { specialtiesFilter } = companiesContext.state;

  const [visible, setVisible] = useState(false);
  function handleClick() {
    setVisible((prev) => !prev);
  }

  return (
    <>
      {specialtiesFilter.length > 0 ? (
        <FilterIconActive onClick={handleClick} style={{ fontSize: '2rem' }} />
      ) : (
        <FilterIcon onClick={handleClick} style={{ fontSize: '2rem' }} />
      )}
      <ModalDialog visible={visible} onClick={handleClick} />
    </>
  );
}
