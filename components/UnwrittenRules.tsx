
import React, { useState } from 'react';
import { useAppContent } from '../App';

const UnwrittenRules: React.FC = () => {
  const { content, lang } = useAppContent();
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'money' | 'relationships' | 'growth'>('all');

  const filteredRules = activeTab === 'all' 
    ? content.unwrittenRules.rules 
    : content.unwrittenRules.rules.filter(r => r.category === activeTab);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{content.unwrittenRules.title}</h2>
        <p className="text-slate-400">{content.unwrittenRules.subtitle}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {['all', 'work', 'money', 'relationships', 'growth'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat as any)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
              activeTab === cat 
                ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg' 
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-emerald-500/50'
            }`}
          >
            {lang === 'en' 
              ? cat.toUpperCase() 
              : cat === 'all' ? 'الكل' : cat === 'work' ? 'العمل' : cat === 'money' ? 'المال' : cat === 'relationships' ? 'العلاقات' : 'النمو'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRules.map((rule) => (
          <div key={rule.id} className="glass p-8 rounded-3xl border-t-4 border-emerald-500 shadow-xl transition-all hover:scale-[1.02]">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block mb-3">
              {lang === 'en' ? rule.category : rule.category === 'work' ? 'عمل' : rule.category === 'money' ? 'مال' : rule.category === 'relationships' ? 'علاقات' : 'نمو'}
            </span>
            <h3 className="text-2xl font-bold mb-4 leading-tight">{rule.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">
              {rule.explanation}
            </p>
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                {lang === 'en' ? 'Examples' : 'أمثلة'}
              </h4>
              {rule.examples.map((ex, i) => (
                <div key={i} className="flex gap-3 text-sm text-slate-300">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>{ex}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnwrittenRules;
