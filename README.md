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

## Improvement Ideas

- [ ] Validate API-response using data validation library like [joi](https://joi.dev/).
- [ ] Create a custom hook for data fetching.
- [ ] Add animations for company card entrance.
- [ ] Add loading spinner.
- [ ] Add on-hover animations for search input and filter.
- [ ] Add pagination.
- [ ] Improve type-safety for IActions (e.g. 'set'-type always with newCompanies-attribute only).
