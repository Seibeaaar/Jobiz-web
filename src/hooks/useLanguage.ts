import { useState, useEffect } from "react";
import i18n from "src/localization";
import { availableLangs } from "src/localization/constants";

const useLanguage = () => {
  const [language, setLanguage] = useState("en");

  const chooseLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const selectedLanguage = localStorage.getItem("language");
    if (selectedLanguage) {
      chooseLanguage(selectedLanguage);
      return;
    }
    // Split is needed to handle cases of different language codes like en & en-US
    const browserLanguage = navigator.language.split("-")[0];
    if (availableLangs.includes(browserLanguage)) {
      chooseLanguage(browserLanguage);
    }
  }, []);

  const updateLanguage = (lang: string) => {
    chooseLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return {
    language,
    updateLanguage,
  };
};

export default useLanguage;
