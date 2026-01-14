
import React from 'react';
import { useAppContent } from '../App';

const About: React.FC = () => {
  const { content } = useAppContent();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 gradient-text">
        {content.about.title}
      </h2>

      <div className="space-y-16">
        <section className="glass p-10 rounded-[2.5rem] relative">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">{content.about.philosophyTitle}</h3>
          </div>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            {content.about.philosophyBody}
          </p>
        </section>

        <section className="glass p-10 rounded-[2.5rem] border-blue-500/20">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">{content.about.visionTitle}</h3>
          </div>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            {content.about.visionBody}
          </p>
        </section>
      </div>

      <div className="mt-20 text-center text-slate-500 border-t border-slate-800 pt-8 italic">
        The Decision Hub © 2024 | Logic Over Intuition
      </div>
    </div>
  );
};

export default About;
