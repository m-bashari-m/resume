import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
         About: "About",
         Projects: "Projects",
         Contact: "Contact"
        }
      },
      fa: {
        translation: {
          About: "درباره",
          Projects: "پروژه ها",
          Contact: "ارتباط"
        }
      },
    }
  });

export default i18n;
