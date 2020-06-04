import React from 'react';

const Navigator = ({ language }) => {
  return (
    <div className='navigator'>
      <div className='navigator-container'>
        <a
          href='https://www.google.com/intl/ru/gmail/about/'
          className='navigator-button'
        >
          {language === 'ru' ? 'Почта' : 'Gmail'}
        </a>
        <a href='https://www.google.by/imghp' className='navigator-button'>
          {language === 'ru' ? 'Картинки' : 'Вiдарысы'}
        </a>
        <a href='/' className='navigator-button'>
          #
        </a>
        <div onClick={() => {}} className='navigator-button navigator-login'>
          {language === 'ru' ? 'Войти' : 'Увайсцi'}
        </div>
      </div>
    </div>
  );
};

export default Navigator;
