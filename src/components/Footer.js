import React from 'react';

const Footer = ({ language }) => {
  return (
    <div className='footer'>
      <a
        href='https://ads.google.com/intl/ru_by/home/'
        className='footer-button-left'
      >
        {language === 'ru'
          ? 'Реклама'
          : language === 'by'
          ? 'Рэклама'
          : language === 'en'
          ? 'Advertising'
          : null}
      </a>
      <a
        href='https://www.google.com/services/#?modal_active=none'
        className='footer-button-left'
      >
        {language === 'ru'
          ? 'Для бизнеса'
          : language === 'by'
          ? 'Бiзнес'
          : language === 'en'
          ? 'Business'
          : null}
      </a>
      <a href='https://about.google/' className='footer-button-left'>
        {language === 'ru'
          ? 'Все о Google'
          : language === 'by'
          ? 'Аб Google'
          : language === 'en'
          ? 'About'
          : null}
      </a>
      <a
        href='https://www.google.com/search/howsearchworks/?fg=1'
        className='footer-button-left'
      >
        {language === 'ru'
          ? 'Как работает Google поиск'
          : language === 'by'
          ? 'Як працуе Пошук'
          : language === 'en'
          ? 'How Search works'
          : null}
      </a>

      <a
        href='https://policies.google.com/privacy'
        className='footer-button-left footer-button-right'
      >
        {language === 'ru'
          ? 'Конфиденциальность'
          : language === 'by'
          ? 'Прыватнасць'
          : language === 'en'
          ? 'Privacy'
          : null}
      </a>
      <a
        href='https://policies.google.com/terms'
        className='footer-button-left'
      >
        {language === 'ru'
          ? 'Условия'
          : language === 'by'
          ? 'Умовы'
          : language === 'en'
          ? 'Terms'
          : null}
      </a>
      <a
        href='https://www.google.com/preferences'
        className='footer-button-left footer-button-last'
      >
        {language === 'ru'
          ? 'Настройка'
          : language === 'by'
          ? 'Налады'
          : language === 'en'
          ? 'Settings'
          : null}
      </a>
    </div>
  );
};

export default Footer;
