import { StrictMode } from 'react';
import App from './App.jsx';
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import theme from './Theme.js'
import { LanguageProvider } from './tools/translation/LanguageProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
