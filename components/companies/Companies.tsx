import { Company } from 'components';
import { useContext } from 'react';
import { CompaniesContext } from 'contexts';

interface Props {
  error: boolean;
  loading: boolean;
}
export default function Companies({ error, loading }: Props) {
  const companiesContext = useContext(CompaniesContext);
  const { filteredCompanies: companies } = companiesContext.state;

  if (error) return <div>Failed to load companies.</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {companies &&
        companies.length > 0 &&
        companies.map((company) => (
          <Company
            key={company.name}
            name={company.name}
            location={company.location}
            specialties={company.specialties.join(', ')}
            logoImg={`https://picsum.photos/seed/${company.name}/100`}
          />
        ))}
      {(!companies || companies.length === 0) && <p>No company found</p>}
    </div>
  );
}
