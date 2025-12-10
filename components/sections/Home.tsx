import React from 'react';
import { PERSONAL_INFO } from '../../constants';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 lg:pt-0">
      <div className="max-w-3xl">
        <h2 className="text-primary font-medium tracking-wider uppercase mb-4 animate-fade-in-up">Introduction</h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-textMain mb-6 leading-tight">
          Designing learning that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">sticks</span>.
        </h1>
        <p className="text-lg md:text-xl text-textMuted leading-relaxed mb-10 max-w-2xl">
          Hi, I'm {PERSONAL_INFO.name}. {PERSONAL_INFO.bio}
        </p>
      </div>
    </section>
  );
};

export default Home;