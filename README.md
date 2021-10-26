# Cosuno Coding Challenge

## Development

```bash
git clone <repo-url>
cd <repo-dir>
npm install
npm run dev
```

## Testing

Tests are implemented using [`cypress.io`](https://www.cypress.io/), an End to End Testing Framework. To build and run tests: `npm run test`.

## Stack

- `NextJS`
- `ReactJS`
- `styled-components` to style components
- `TypeScript`
- `Cypress` for tests
- `SWR` for data fetching
- `useContext` and `useReducer` for state management

## Improvement Ideas

- [ ] Validate API-response using data validation library like [joi](https://joi.dev/).
- [ ] Add animations for company card entrance.
- [ ] Add loading spinner.
- [ ] Add pagination.
- [ ] Improve type-safety for Actions (e.g. 'set'-type always with newCompanies-attribute only).
- [ ] Add Mobile Responsiveness.
- [ ] Show number of shown companies.
- [ ] Add button to clear filters.
