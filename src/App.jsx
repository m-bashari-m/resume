import { Hero, Navbar, Projects } from './components';

import './App.css'
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className={`app font-sans text-primary`}>
        <Navbar />
        <Hero />
        <Projects />
      </div>
    </LanguageProvider>
  )
}

export default App
