
import React, { useState } from 'react';
import { useAppContent } from '../App';
import { Persona } from '../types';

const LifeSimulation: React.FC = () => {
  const { content, lang } = useAppContent();
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  const startSimulation = (persona: Persona) => {
    setSelectedPersona(persona);
    setStepIndex(0);
    setResult(null);
  };

  const handleChoice = (res: string | undefined) => {
    if (res) setResult(res);
  };

  const reset = () => {
    setSelectedPersona(null);
    setStepIndex(0);
    setResult(null);
  };

  if (!selectedPersona) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{content.lifeSimulation.title}</h2>
          <p className="text-slate-400">{content.lifeSimulation.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.lifeSimulation.personas.map((p) => (
            <div key={p.id} className="glass rounded-[2rem] overflow-hidden group">
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <p className="text-amber-500 text-sm font-bold mb-4">{p.title}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.description}</p>
                <button
                  onClick={() => startSimulation(p)}
                  className="w-full bg-slate-800 text-white py-3 rounded-xl font-bold hover:bg-amber-600 transition-all border border-slate-700 hover:border-amber-500"
                >
                  {lang === 'en' ? 'Simulate Life' : 'بدء المحاكاة'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const currentStep = selectedPersona.steps[stepIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button onClick={reset} className="text-slate-400 hover:text-white flex items-center gap-2 mb-8 group">
        <svg className={`w-5 h-5 transition-transform group-hover:-translate-x-1 ${lang === 'ar' ? 'rotate-180 group-hover:translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {lang === 'en' ? 'Back to Selection' : 'العودة للاختيار'}
      </button>

      <div className="glass p-10 rounded-[2.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
           <span className="text-8xl font-black">{selectedPersona.name[0]}</span>
        </div>

        {result ? (
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl font-bold mb-8">{lang === 'en' ? 'Outcome Reached' : 'النتيجة النهائية'}</h3>
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-amber-500/20 mb-10">
              <p className="text-xl leading-relaxed text-slate-300">{result}</p>
            </div>
            <button onClick={reset} className="bg-amber-600 text-white px-10 py-4 rounded-2xl font-bold shadow-lg">
              {lang === 'en' ? 'Try Another Persona' : 'تجربة شخصية أخرى'}
            </button>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-amber-600/20 text-amber-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {lang === 'en' ? 'Decision Point' : 'نقطة قرار'}
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-10 leading-snug">{currentStep.question}</h3>
            <div className="space-y-4">
              {currentStep.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleChoice(opt.result)}
                  className="w-full p-6 bg-slate-800/50 border border-slate-700 rounded-2xl text-left hover:border-amber-500 hover:bg-slate-700 transition-all flex items-center justify-between group"
                >
                  <div className={`${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    <div className="font-bold text-lg mb-1">{opt.label}</div>
                    <div className="text-sm text-slate-400">{opt.description}</div>
                  </div>
                  <svg className={`w-5 h-5 text-slate-600 group-hover:text-amber-500 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LifeSimulation;
