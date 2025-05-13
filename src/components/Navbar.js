import './Navbar.css';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useLanguage } from './language';


const Navbar = () => {
  const { language, setLanguage, translations } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  return (
    <div className='barra'>
      <div className='dropdown-container'>
        <Dropdown className='dropdown'>
          <Dropdown.Toggle variant="success" className="dropdown-basic">
            {translations[language].locations}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="zakliczyn/cityCenter">
              {translations[language].menuItems.zaklinczyn}
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="melsztyn/melsztyn">
              {translations[language].menuItems.melsztyn}
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="musicCenter/musicCenter">
              {translations[language].menuItems.musicCenter}
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="euroveloMotesk/EuroveloMotesk">
              {translations[language].menuItems.eurovelo}
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="StIdzi/StIdzi">
              {translations[language].menuItems.stIdzi}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        <Dropdown className='dropdown'>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {translations[language].gastronomy}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="anotherLink1">
              {language === 'en' ? 'Another Link 1' : 'Inny Link 1'}
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="anotherLink2">
              {language === 'en' ? 'Another Link 2' : 'Inny Link 2'}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        <div className="lang" onClick={toggleLanguage} style={{ cursor: 'pointer' }}>
          <img
            src={translations[language].welcome}
            alt={language === 'en' ? 'English' : 'Polish'}
            style={{ width: '100%', maxWidth: '300px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
