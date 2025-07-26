import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: "0em",        // mobile <576px
  tablet: "36em",   // 576px
  desktop: "60em",  // 960px
  lg: "90em",       // 1440px
  xl: "96em",       // optional if needed (1536px)
};

const fontSizes = {
  h: {
    sm: "18px",
    tablet: "36px",
    desktop: "40px",
    lg: "48px",
  }, 
  sh: {
    sm: "10px",
    tablet: "20px",
    desktop: "24px",
    lg: "28px",
  },
  t: {
    sm: "8px",
    tablet: "10px",
    desktop: "18px",
    lg: "20px",
  },
  ts: {
    sm: "6px",
    tablet: "8px",
    desktop: "18px",
    lg: "20px",
  },
};

const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: "'Futura', 'Trebuchet MS', Arial, sans-serif",
    body: "'Futura', 'Trebuchet MS', Arial, sans-serif",
  },
  textStyles: {
    h: {
      fontWeight: "bold",
      fontSize: fontSizes.h,
    },
    sh: {
      fontWeight: "normal",
      lineHeight: "short",
      fontSize: fontSizes.sh,
    },
    t: {
      fontWeight: "normal",
      lineHeight: "base",
      fontSize: fontSizes.t,
    },
    tb: {
      fontWeight: "bold",
      lineHeight: "base",
      fontSize: fontSizes.t,
    },
    ts: {
      fontWeight: "normal",
      lineHeight: "base",
      fontSize: fontSizes.ts,
    },
  },
  styles: {
    global: {
      'html, body': {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '1.5',
        bg: 'black',
        scrollBehavior: 'smooth',
      },
    },
  },
});

export default theme;
