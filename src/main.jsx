import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "./contexts/Languagecontext.jsx";
import { DarkWhiteModeProvider } from "./contexts/Darkwhitemode.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <DarkWhiteModeProvider>
        <App />
      </DarkWhiteModeProvider>
    </LanguageProvider>
  </StrictMode>
);
