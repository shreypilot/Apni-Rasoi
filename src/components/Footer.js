import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { countries, languages } from '../utils/data';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedCountry, setSelectedCountry] = useState('USA');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // You can also set the language in a state management library like Redux or Context
  }

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    // You can also set the country in a state management library like Redux or Context
  }

  return (
    <footer className="bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex flex-col items-center text-gray-400">
            <Link to="/" className="text-2xl font-bold text-white mb-4">
              Apni Rasoi
            </Link>
            <div className="flex items-center">
              <p className="mr-4">{t('language')}: </p>
              <select value={selectedLanguage} onChange={handleLanguageChange} className="mr-4 bg-gray-800 border border-gray-700 text-white py-2 px-3 rounded">
                {languages.map(language => (
                  <option key={language.code} value={language.code}>{language.name}</option>
                ))}
              </select>
              <p className="mr-4">{t('country')}: </p>
              <select value={selectedCountry} onChange={handleCountryChange} className="bg-gray-800 border border-gray-700 text-white py-2 px-3 rounded">
                {countries.map(country => (
                  <option key={country.code} value={country.code}>{country.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col items-end">
            
            <div className="flex items-center text-white">
              <p className="mr-4">{t('follow_us')}: </p>
            </div>
          </div>
        </div>
      </div>
      </footer>

    );
  };
  
  export default Footer;