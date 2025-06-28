import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'Futura', 'Trebuchet MS', Arial, sans-serif",
    body: "'Futura', 'Trebuchet MS', Arial, sans-serif",
  },
    styles: {
      global: {
        'html, body': {
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '1.5',
          bg: 'black'
        },
      },
  },
});

export default theme;
