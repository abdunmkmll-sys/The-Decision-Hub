
import React, { useState } from 'react';
import { useAppContent } from '../App';
import { DecisionNode } from '../types';

const DecisionMaps: React.FC = () => {
  const { content, lang } = useAppContent();
  const [activeTree, setActiveTree] = useState<keyof typeof content.decisionMaps.trees>('careers');
  const [history, setHistory] = useState<DecisionNode[]>([]);
  const [currentNodeId, setCurrentNodeId] = useState<string>('root');
  const [result, setResult] = useState<string | null>(null);

  const tree = content.decisionMaps.trees[activeTree];
  const currentNode = tree.find(n => n.id === currentNodeId);

  const handleOptionSelect = (nextStep: string | undefined, finalResult: string | undefined) => {
    if (finalResult) {
      setResult(finalResult);
      return;
    }
    if (nextStep && currentNode) {
      setHistory([...history, currentNode]);
      setCurrentNodeId(nextStep);
    }
  };

  const reset = () => {
    setHistory([]);
    setCurrentNodeId('root');
    setResult(null);
  };

  const switchTree = (treeKey: keyof typeof content.decisionMaps.trees) => {
    setActiveTree(treeKey);
    setHistory([]);
    setCurrentNodeId('root');
    setResult(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{content.decisionMaps.title}</h2>
        <p className="text-slate-400">{content.decisionMaps.subtitle}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {(Object.keys(content.decisionMaps.trees) as Array<keyof typeof content.decisionMaps.trees>).map((key) => (
          <button
            key={key}
            onClick={() => switchTree(key)}
            className={`px-6 py-3 rounded-2xl font-bold transition-all ${
              activeTree === key ? 'bg-amber-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {lang === 'en' ? key.toUpperCase() : key === 'careers' ? 'المسار المهني' : key === 'education' ? 'المسار الدراسي' : 'تغييرات شخصية'}
          </button>
        ))}
      </div>

      <div className="glass p-8 md:p-12 rounded-[2rem] min-h-[400px] flex flex-col items-center justify-center text-center">
        {result ? (
          <div className="animate-fade-in">
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-6">{lang === 'en' ? 'Your Result' : 'نتيجتك'}</h3>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              {result}
            </p>
            <button
              onClick={reset}
              className="bg-amber-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-amber-500 transition-all"
            >
              {lang === 'en' ? 'Start Over' : 'ابدأ من جديد'}
            </button>
          </div>
        ) : currentNode ? (
          <div className="w-full">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-100">
              {currentNode.question}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentNode.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleOptionSelect(opt.nextStep, opt.result)}
                  className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl text-left hover:border-amber-500 hover:bg-slate-700/50 transition-all group flex flex-col h-full"
                >
                  <span className={`text-lg font-bold mb-2 group-hover:text-amber-500 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {opt.label}
                  </span>
                  <span className={`text-sm text-slate-400 group-hover:text-slate-300 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {opt.description}
                  </span>
                </button>
              ))}
            </div>
            {history.length > 0 && (
              <button
                onClick={() => {
                  const newHistory = [...history];
                  const last = newHistory.pop();
                  if (last) {
                    setHistory(newHistory);
                    setCurrentNodeId(last.id);
                  }
                }}
                className="mt-12 text-slate-500 hover:text-amber-500 flex items-center gap-2 mx-auto"
              >
                <svg className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {lang === 'en' ? 'Previous Step' : 'الخطوة السابقة'}
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DecisionMaps;
