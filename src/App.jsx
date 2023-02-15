import { useEffect, useState } from 'react';
import { Navbar } from './components';

import './App.css'
import { LanguageProvider } from './context/LanguageContext';


function App() {
  return (
    <LanguageProvider>
      <div className={`app font-sans text-primary`}>
        <Navbar />
      </div>
    </LanguageProvider>
  )
}

export default App
