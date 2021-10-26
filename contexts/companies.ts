import { createContext } from 'react';
import { Company } from 'types';

export interface Actions {
  type: 'set' | 'searchFilter' | 'addSpecialty' | 'removeSpecialty';
  companies?: Company[];
  query?: string;
  specialty?: string;
}

export interface State {
  companies: Company[];
  filteredCompanies: Company[];
  specialtiesFilter: string[];
  query: string;
}

export const initialState: State = {
  companies: [],
  filteredCompanies: [],
  specialtiesFilter: [],
  query: '',
};

export const reducer = (state: State, action: Actions): State => {
  const {
    type,
    companies: newCompanies,
    query: newQuery,
    specialty: newSpecialty,
  } = action;

  switch (type) {
    case 'set':
      if (newCompanies) {
        return {
          ...state,
          companies: [...newCompanies],
          filteredCompanies: [...newCompanies],
        };
      } else {
        return state;
      }
    case 'addSpecialty':
      if (newSpecialty) {
        if (!state.specialtiesFilter.includes(newSpecialty)) {
          const newState = {
            ...state,
            specialtiesFilter: [...state.specialtiesFilter, newSpecialty],
          };
          return searchFilter(newQuery, newState);
        }
      }
      return state;
    case 'removeSpecialty':
      if (newSpecialty) {
        const index = state.specialtiesFilter.indexOf(newSpecialty);
        if (index > -1) {
          const newSpecialtiesFilter = [...state.specialtiesFilter];
          newSpecialtiesFilter.splice(index, 1);
          const newState = {
            ...state,
            specialtiesFilter: newSpecialtiesFilter,
          };
          return searchFilter(newQuery, newState);
        }
      }
      return state;
    case 'searchFilter':
      return searchFilter(newQuery, state);
    default:
      return state;
  }
};

export interface Props {
  state: State;
  dispatch: React.Dispatch<Actions>;
}

const CompaniesContext = createContext<Props>({
  state: initialState,
  dispatch: () => {},
});

export const CompaniesContextConsumer = CompaniesContext.Consumer;
export const CompaniesContextProvider = CompaniesContext.Provider;
export default CompaniesContext;

function searchFilter(newQuery: string | undefined, state: State) {
  let searchResult: Company[];
  if (newQuery) {
    searchResult = state.companies.filter((company) =>
      company.name.toLowerCase().includes(newQuery.toLowerCase())
    );
  } else {
    searchResult = [...state.companies];
  }
  let filterResult: Company[];
  if (state.specialtiesFilter.length > 0) {
    filterResult = searchResult.filter((company) =>
      state.specialtiesFilter.every((specialty) =>
        company.specialties.includes(specialty)
      )
    );
  } else {
    filterResult = searchResult;
  }
  return {
    ...state,
    filteredCompanies: filterResult,
    query: newQuery || '',
  };
}
