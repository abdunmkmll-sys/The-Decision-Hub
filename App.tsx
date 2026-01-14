
import React, { useState, createContext, useContext, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Language, ContentData } from './types';
import { CONTENT } from './data/content';

// Components
import Home from './components/Home';
import DecisionMaps from './components/DecisionMaps';
import LifeSimulation from './components/LifeSimulation';
import UnwrittenRules from './components/UnwrittenRules';
import About from './components/About';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  content: ContentData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useAppContent = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useAppContent must be used within LanguageProvider");
  return context;
};

const Navbar = () => {
  const { lang, setLang, content } = useAppContent();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-2xl h-16 flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-xl font-bold tracking-tighter gradient-text">
          DECISION HUB
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {[
          { path: '/', label: content.navigation.home },
          { path: '/maps', label: content.navigation.decisionMaps },
          { path: '/sim', label: content.navigation.lifeSimulation },
          { path: '/rules', label: content.navigation.unwrittenRules },
          { path: '/about', label: content.navigation.about },
        ].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium transition-all hover:text-amber-400 ${
              isActive(link.path) ? 'text-amber-500 underline underline-offset-8' : 'text-slate-300'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
        className="px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-white transition-all text-sm font-bold"
      >
        {lang === 'en' ? 'العربية' : 'English'}
      </button>
    </nav>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, content: CONTENT[lang] }}>
      <HashRouter>
        <div className={`min-h-screen bg-slate-950 text-slate-100 ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
          <Navbar />
          <main className="pt-20 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/maps" element={<DecisionMaps />} />
              <Route path="/sim" element={<LifeSimulation />} />
              <Route path="/rules" element={<UnwrittenRules />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </LanguageContext.Provider>
  );
};

export default App;
