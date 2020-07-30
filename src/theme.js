const palette = {
  black: ['#000000'],
  white: ['#ffffff'],
  grey: ['#696969', '#F4F4F4'],
  outline: ['#E7E7E7'],
  blue: ['#345FF9', '#DBEAFF', '#F9FBFE'],
  purple: ['#372989', '#9487E2', '#DBD7F8'],
  yellow: ['#BE8D2D', '#EDC069', '#FAF3E5'],
  red: ['#B44C3E', '#ED9C91', '#FBE7E5'],
  green: ['#439D72', '#A3D8BE', '#D0F3E2'],
};

const textStyles = {
  heading: {
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontSize: 'lg',
    fontWeight: 'bold',
  },
  body: {
    fontWeight: 'normal',
    fontFamily: 'body',
    fontSize: 'md',
    lineHeight: 'body',
    color: 'text',
  },
  formtitle: {
    fontWeight: 'bold',
    fontFamily: 'body',
    fontSize: 'md',
    lineHeight: 'body',
    color: 'text',
  },
  sectiontitle: {
    fontWeight: 'bold',
    fontFamily: 'body',
    fontSize: 'smd',
    lineHeight: 'body',
    color: 'text',
  },
  subtitle: {
    fontWeight: 'bold',
    fontFamily: 'body',
    fontSize: 'lmd',
    lineHeight: 'body',
    color: 'text',
  },
  error: {
    fontWeight: 'normal',
    lineHeight: 'body',
    fontFamily: 'body',
    fontSize: 'md',
    color: 'error',
  },
};

const theme = {
  colors: {
    ...palette,
    background: palette.grey[6],
    text: palette.black[0],
    primary: palette.blue[0],
    secondary: palette.grey[2],
    accent: '#fa3653',
    muted: palette.grey[4],
    error: palette.red[0],
    bg: palette.white[0],
    lgrey: palette.grey[1],
    oline: palette.outline[0],
    drafta: palette.yellow[0],
    draftb: palette.yellow[2],
    midblue: palette.blue[1],
    greyblue: palette.blue[2],
    purplea: palette.purple[0],
    purpleb: palette.purple[2],
    bluebg: palette.blue[1],
    grad: '#F1EEFC',
  },
  space: [0, 8, 12, 24, 36],
  fonts: {
    heading: 'Public Sans, sans-serif',
    body: 'Public Sans, sans-serif',
    // monospace: `"Mono Lisa", Monaco, monospace` /* Check out https://monolisa.dev for Mono Lisa font */,
  },
  fontSizes: {
    xl: '4rem',
    lg: '2rem',
    lmd: '1.6rem',
    smd: '1.3rem',
    md: '1rem',
    sm: '0.9rem',
    xs: '0.75rem',
  },
  fontWeights: {
    light: 200,
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  borders: {
    none: 'none',
    thin: '1.3px solid',
  },
  radii: {
    none: 0,
    base: '8px',
    round: 99999,
  },
  textStyles,
};

export default theme;
