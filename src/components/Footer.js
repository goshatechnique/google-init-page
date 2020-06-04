import React from 'react';

const Footer = ({ language }) => {
  return (
    <div className='footer'>
      <a
        href='https://ads.google.com/intl/ru_by/home/'
        className='footer-button-left'
      >
        {language === 'ru' ? 'Реклама' : 'Рэклама'}
      </a>
      <a
        href='https://www.google.com/services/#?modal_active=none'
        className='footer-button-left'
      >
        {language === 'ru' ? 'Для бизнеса' : 'Бiзнес'}
      </a>
      <a href='https://about.google/' className='footer-button-left'>
        {language === 'ru' ? 'Все о Google' : 'Аб Google'}
      </a>
      <a
        href='https://www.google.com/search/howsearchworks/?fg=1'
        className='footer-button-left'
      >
        {language === 'ru' ? 'Как работает Google поиск' : 'Як працуе Пошук'}
      </a>

      <a
        href='https://policies.google.com/privacy'
        className='footer-button-left footer-button-right'
      >
        {language === 'ru' ? 'Конфиденциальность' : 'Прыватнасць'}
      </a>
      <a
        href='https://policies.google.com/terms'
        className='footer-button-left'
      >
        {language === 'ru' ? 'Условия' : 'Умовы'}
      </a>
      <a
        href='https://www.google.com/preferences'
        className='footer-button-left footer-button-last'
      >
        {language === 'ru' ? 'Настройка' : 'Налады'}
      </a>
    </div>
  );
};

export default Footer;
