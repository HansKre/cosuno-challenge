import { createContext } from 'react';
import { ICompany } from 'types';

export interface IActions {
  type: 'set' | 'searchFilter';
  newCompanies?: ICompany[];
  query?: string;
  specialties?: string[];
}

export interface IState {
  companies: ICompany[];
  filteredCompanies: ICompany[];
}

export const initialState: IState = {
  companies: [],
  filteredCompanies: [],
};

export const reducer = (state: IState, action: IActions): IState => {
  let companies = [...state.companies];
  const { newCompanies, query, type, specialties } = action;

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
    case 'searchFilter':
      let searchResult: ICompany[];
      if (query) {
        searchResult = companies.filter((company) =>
          company.name.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        searchResult = [...companies];
      }
      let filterResult: ICompany[];
      if (specialties && specialties.length > 0) {
        filterResult = searchResult.filter((company) =>
          specialties.some((specialty) =>
            company.specialties.includes(specialty)
          )
        );
      } else {
        filterResult = searchResult;
      }
      return { ...state, filteredCompanies: filterResult };
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
