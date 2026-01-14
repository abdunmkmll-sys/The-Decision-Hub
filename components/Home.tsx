
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContent } from '../App';

const Home: React.FC = () => {
  const { content } = useAppContent();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col items-center justify-center min-h-[80vh]">
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          <span className="gradient-text">{content.home.heroTitle}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {content.home.heroSubtitle}
        </p>
        <Link
          to="/maps"
          className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-900/20 transition-all hover:scale-105"
        >
          {content.home.cta}
        </Link>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* Card 1 */}
        <Link
          to="/maps"
          className="group glass p-8 rounded-3xl transition-all hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10"
        >
          <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3">{content.home.cards.decisionMaps.title}</h3>
          <p className="text-slate-400 leading-relaxed">{content.home.cards.decisionMaps.desc}</p>
        </Link>

        {/* Card 2 */}
        <Link
          to="/sim"
          className="group glass p-8 rounded-3xl transition-all hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
        >
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3">{content.home.cards.lifeSimulation.title}</h3>
          <p className="text-slate-400 leading-relaxed">{content.home.cards.lifeSimulation.desc}</p>
        </Link>

        {/* Card 3 */}
        <Link
          to="/rules"
          className="group glass p-8 rounded-3xl transition-all hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10"
        >
          <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168 0.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332 0.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332 0.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3">{content.home.cards.unwrittenRules.title}</h3>
          <p className="text-slate-400 leading-relaxed">{content.home.cards.unwrittenRules.desc}</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
