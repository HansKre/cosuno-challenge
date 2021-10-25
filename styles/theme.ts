const theme = {
  typography: {
    h1: '4.4rem',
    h2: '1.5rem',
    logo: '2rem',
    h3: '1.17rem',
    p: '1.2rem',
    label: '1.2rem',
    input: '1.2rem',
  },
  palette: {
    primary: 'hsl(260, 8%, 14%)',
    secondary: 'hsl(180, 66%, 49%)',
    warning: 'hsl(0, 87%, 67%)',
    darkViolet: 'hsl(257, 27%, 26%)',
    background: 'hsl(230, 25%, 95%)',
    cardBackground: 'white',
    gray: 'hsl(0, 0%, 75%)',
    grayishViolet: 'hsl(257, 7%, 63%)',
    veryDarkBlue: 'hsl(255, 11%, 22%)',
  },
  borderRadius: '5px',
  paddingTB: '0.3rem 0',
  paddingTBLR: '0.3rem 0.3rem',
  paddingCard: '0rem 2rem',
  margin: '1rem 0',
};

export default theme;

export interface Theme {
  typography: Typography;
  palette: Palette;
  borderRadius: string;
  paddingTB: string;
  paddingTBLR: string;
  paddingCard: string;
  margin: string;
}

export interface Palette {
  primary: string;
  secondary: string;
  warning: string;
  darkViolet: string;
  background: string;
  cardBackground: string;
  gray: string;
  grayishViolet: string;
  veryDarkBlue: string;
}

export interface Typography {
  h1: string;
  h2: string;
  logo: string;
  h3: string;
  p: string;
  label: string;
}
