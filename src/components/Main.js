import React, { useState } from 'react';

import loupe from '../images/loupe.png';
import keyboard from '../images/keyboard.png';
import voiceSearch from '../images/voice-search.png';

const Main = ({ logo, language, setLanguage }) => {
  const [searchString, setSearchString] = useState('');

  const searchInGoogle = () => {
    if (!searchString) return;
    let words_array = searchString.split(' ');
    let searchStringEdited = '';
    words_array.map((word) => (searchStringEdited += word + '+'));
    window.document.location.href = `https://www.google.com/search?q=${searchStringEdited}`;
  };

  const ruToggle = (
    <div
      className='div-lang'
      onClick={() => {
        setLanguage('ru');
      }}
    >
      Русский
    </div>
  );

  const byToggle = (
    <div
      className='div-lang'
      onClick={() => {
        setLanguage('by');
      }}
    >
      Беларуская
    </div>
  );

  const enToggle = (
    <div
      className='div-lang'
      onClick={() => {
        setLanguage('en');
      }}
    >
      English
    </div>
  );

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

          <img
            src={keyboard}
            alt='#'
            className='search-keyboard'
            title='Экранная клавиатура'
          />
          <img
            src={voiceSearch}
            alt='#'
            className='search-voice'
            title='Голосовой поиск'
          />
        </div>
        <div className='search-navigator'>
          <button
            className='main-button'
            onClick={() => {
              searchInGoogle();
            }}
          >
            {language === 'ru'
              ? 'Поиск в Google'
              : language === 'by'
              ? 'Пошук Google'
              : language === 'en'
              ? 'Google search'
              : null}
          </button>
          <button className='main-button'>
            {language === 'ru'
              ? 'Мне повезет!'
              : language === 'by'
              ? 'Мне пашанцуе'
              : language === 'en'
              ? "I'm feeling Lucky"
              : null}
          </button>
        </div>
        <div className='search-languages'>
          {language === 'ru'
            ? 'Сервисы Google доступны на разных языках:'
            : language === 'by'
            ? 'Даступная мова:'
            : 'Google offered in: '}
          {language !== 'ru' ? ruToggle : null}
          {language !== 'en' ? enToggle : null}
          {language !== 'by' ? byToggle : null}
        </div>
      </div>

      <div className='country'>
        <span className='span-country'>{'Беларусь'}</span>
      </div>
    </>
  );
};

export default Main;
