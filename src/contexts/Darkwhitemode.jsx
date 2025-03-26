import { createContext, useState } from "react";

export let DarkWhiteMode = createContext();

export function DarkWhiteModeProvider({ children }) {
  let [darkwhitemode, setDarkwhitemode] = useState(false);
  return (
    <DarkWhiteMode.Provider value={{ darkwhitemode, setDarkwhitemode }}>
      {children}
    </DarkWhiteMode.Provider>
  );
}
