import React, { useState } from 'react';

import loupe from '../images/loupe.png';
import keyboard from '../images/keyboard.png';

const Main = ({ logo, language, setLanguage }) => {
  const [searchString, setSearchString] = useState('');

  const searchInGoogle = () => {
    if (!searchString) return;
    let words_array = searchString.split(' ');
    let searchStringEdited = '';
    words_array.map((word) => (searchStringEdited += word + '+'));
    window.document.location.href = `https://www.google.com/search?q=${searchStringEdited}`;
  };

  return (
    <>
      <div className='main'>
        <img className='logo' src={logo} alt='#' />
        <div className='searcher'>
          <img src={loupe} alt='#' className='search-loup' />
          <input
            className='main-input'
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          {searchString ? (
            <div
              className='search-clean'
              onClick={() => {
                setSearchString('');
              }}
            >
              &times;
            </div>
          ) : null}

          <img src={keyboard} alt='#' className='search-keyboard' />
        </div>
        <div className='search-navigator'>
          <button
            className='main-button'
            onClick={() => {
              searchInGoogle();
            }}
          >
            {language === 'ru' ? 'Поиск в Google' : 'Пошук Google'}
          </button>
          <button className='main-button'>
            {language === 'ru' ? 'Мне повезет!' : 'Мне пашанцуе'}
          </button>
        </div>
        <div className='search-languages'>
          {language === 'ru'
            ? `Сервисы Google доступны на разных языках:`
            : 'Даступная мова:'}
          {language === 'ru' ? (
            <div
              className='div-lang'
              onClick={() => {
                setLanguage('by');
              }}
            >
              Беларуская
            </div>
          ) : language === 'by' ? (
            <div
              className='div-lang'
              onClick={() => {
                setLanguage('ru');
              }}
            >
              Русский
            </div>
          ) : null}
        </div>
      </div>

      <div className='country'>
        <span className='span-country'>{'Беларусь'}</span>
      </div>
    </>
  );
};

export default Main;
