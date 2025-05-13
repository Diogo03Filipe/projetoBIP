import React, { createContext, useState, useContext } from 'react';
import ukBanner from '../assets/uk_banner.png'
import plBanner from '../assets/pl_banner.png'


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const translations = {
    en: {
      welcome: ukBanner,
      locations: "Locations",
      gastronomy: "Gastronomy",
      menuItems: {
        zaklinczyn: "Zaklinczyn",
        melsztyn: "Melsztyn",
        musicCenter: "Music Center",
        eurovelo: "Eurovelo Mostek",
        stIdzi: "St. Idzi Zakliczyn",
      },
      zakliczyn: {
        title: "Zaklinczyn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      melsztyn: {
        title: "Melsztyn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      MusicCenter: {
        title: "Music Center",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      EuroveloMostek: {
        title: "Eurovelo Mostek",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      StIdziZakliczyn: {
        title: "St. Idzi Zakliczyn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      }
    },

    pl: {
      welcome: plBanner,
      locations: "Lokalizacje",
      gastronomy: "Gastronomia",
      menuItems: {
        zaklinczyn: "Zakliczyn",
        melsztyn: "Melsztyn",
        musicCenter: "Centrum Muzyczne",
        eurovelo: "Eurovelo Mostek",
        stIdzi: "Św. Idzi Zakliczyn",
      },
      zakliczyn: {
        title: "Zaklinczyn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      melsztyn: {
        title: "Melsztyn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      MusicCenter: {
        title: "Centrum Muzyczne",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      EuroveloMostek: {
        title: "Eurovelo Mostek",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      },
      StIdziZakliczyn: {
        title: "St. Idzi Zakliczyn",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...\nLorem ipsum dolor sit amet, consectetur adipiscing elit..."
      }

    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }
    }>
      {children}
    </LanguageContext.Provider >
  );
};

export const useLanguage = () => useContext(LanguageContext);