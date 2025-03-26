import { createContext, useState } from "react";

export let LanguageContext = createContext();

export function LanguageProvider({ children }) {
  let [language, setLanguage] = useState("eng");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
