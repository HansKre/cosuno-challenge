import { ICompany } from 'types';
import { Company } from 'components';
import useSWR from 'swr';

export default function Companies() {
  const fetcher = (path: string) => {
    return fetch(path).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw Error(res.statusText);
    });
  };
  const { data: companies, error } = useSWR<ICompany[], any>(
    '/api/companies',
    fetcher
  );

  if (error) return <div>Failed to load companies.</div>;
  if (!error && !companies) return <div>Loading...</div>;
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
