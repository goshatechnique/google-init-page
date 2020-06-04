import React, { useState } from 'react';

import logo from './images/google_logo.png';

import Navigator from './components/Navigator.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  const [language, setLanguage] = useState('ru');
  return (
    <div className='container'>
      <Navigator language={language} />
      <Main logo={logo} language={language} setLanguage={setLanguage} />
      <Footer language={language} />
    </div>
  );
}

export default App;
