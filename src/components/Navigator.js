import React, { useState } from 'react';
import Menu from './Menu.js';
import blocks from '../images/blocks.png';

const Navigator = ({ language }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  return (
    <div className='navigator'>
      <div className='navigator-container'>
        <a
          href='https://www.google.com/intl/ru/gmail/about/'
          className='navigator-button'
        >
          {language === 'ru'
            ? 'Почта'
            : language === 'by'
            ? 'Gmail'
            : language === 'en'
            ? 'Gmail'
            : null}
        </a>
        <a href='https://www.google.by/imghp' className='navigator-button'>
          {language === 'ru'
            ? 'Картинки'
            : language === 'by'
            ? 'Вiдарысы'
            : language === 'en'
            ? 'Images'
            : null}
        </a>
        <img
          src={blocks}
          alt='#'
          onClick={() => {
            setMenuVisible(!isMenuVisible);
          }}
          className='navigator-button navigator-button-block '
        ></img>
        {isMenuVisible ? <Menu /> : null}
        <div
          onClick={() => {
            window.document.location.href = `https://accounts.google.com/servicelogin`;
          }}
          className='navigator-button navigator-login'
        >
          {language === 'ru'
            ? 'Войти'
            : language === 'by'
            ? 'Увайсцi'
            : language === 'en'
            ? 'Sign in'
            : null}
        </div>
      </div>
    </div>
  );
};

export default Navigator;
