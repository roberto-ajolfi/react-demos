import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./i18n/Localization";
import { useTranslation } from 'react-i18next';
import MyComponent from './MyComponent';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  var changeLanguage = (lang: string) => {
    console.log(i18n.language)
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
        <h1>{t('title')}</h1>
        <h3>{t('content')}</h3>
        <div className="cover">
          <figure className='center'>
            <img width="150px" src='http://www.ariadimaresanvito.it/sito/images/macro_7.JPG' alt="Lighthouse picture"/>
          </figure>
        </div>
        <p className='center'>{t('alt')}</p>
        <MyComponent></MyComponent>
        <div>
          <span><a href='#' onClick={() => changeLanguage('it')}><img width="20px" src='https://cdn.countryflags.com/thumbs/italy/flag-400.png'/></a></span>&nbsp;|&nbsp;
          <span><a href='#' onClick={() => changeLanguage('en')}><img width="25px" src='https://cdn.webshopapp.com/shops/94414/files/54956666/the-united-kingdom-flag-icon-free-download.jpg'/></a></span>
        </div>
    </div>
  );
}

export default App;
