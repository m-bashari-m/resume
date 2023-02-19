import { Hero, Navbar, Projects, Skills } from './components';

import './App.css'
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className={`app font-sans text-primary`}>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
      </div>
    </LanguageProvider>
  )
}

export default App
