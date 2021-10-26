import { createContext } from 'react';
import { ICompany } from 'types';

export interface IActions {
  type: 'set' | 'searchFilter' | 'addSpecialty' | 'removeSpecialty';
  companies?: ICompany[];
  query?: string;
  specialty?: string;
}

export interface IState {
  companies: ICompany[];
  filteredCompanies: ICompany[];
  specialtiesFilter: string[];
  query: string;
}

export const initialState: IState = {
  companies: [],
  filteredCompanies: [],
  specialtiesFilter: [],
  query: '',
};

export const reducer = (state: IState, action: IActions): IState => {
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

export interface IContextProps {
  state: IState;
  dispatch: React.Dispatch<IActions>;
}

const CompaniesContext = createContext<IContextProps>({
  state: initialState,
  dispatch: () => {},
});

export const CompaniesContextConsumer = CompaniesContext.Consumer;
export const CompaniesContextProvider = CompaniesContext.Provider;
export default CompaniesContext;

function searchFilter(newQuery: string | undefined, state: IState) {
  let searchResult: ICompany[];
  if (newQuery) {
    searchResult = state.companies.filter((company) =>
      company.name.toLowerCase().includes(newQuery.toLowerCase())
    );
  } else {
    searchResult = [...state.companies];
  }
  let filterResult: ICompany[];
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
