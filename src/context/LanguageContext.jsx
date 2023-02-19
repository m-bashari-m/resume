import { createContext, useContext, useEffect, useState } from "react";
import i18n from "../components/i18n";

const LanguageContext = createContext({lang:"en"})

export const LanguageProvider = ({children}) =>{
  const [lang, setLang] = useState("en")

  const handleTrans = () => {
    setLang(prevLang => prevLang === "en" ? "fa" : "en")
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang])
  
  return (
    <LanguageContext.Provider 
      value={{
          lang: lang, 
          langToggler: handleTrans
        }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)