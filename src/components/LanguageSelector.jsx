import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="mb-4">
      <label className="mr-2">Select Language:</label>
      <select onChange={(e) => changeLanguage(e.target.value)} className="border rounded p-1">
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
};

export default LanguageSelector;