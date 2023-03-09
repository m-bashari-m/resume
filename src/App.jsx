import { Contact, Hero, Navbar, Projects, Skills } from './components';

import './App.css'
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className={`app font-sans text-primary`}>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </LanguageProvider>
  )
}

export default App
