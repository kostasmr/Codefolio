import { useState } from "react";
import PropTypes from "prop-types";
import translations from "./translations.json"; 
import { LanguageContext } from "./LanguageContext";


export const LanguageProvider = ({ children }) => { 
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "el" : "en"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children} 
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};






