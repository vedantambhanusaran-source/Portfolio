import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/sections/Home';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background text-textMain">
      
      {/* Sidebar - Fixed Width */}
      <div className="lg:w-72 shrink-0">
        <Sidebar />
      </div>

      {/* Main Content - Takes Remaining Space */}
      <main className="flex-1 lg:ml-72 bg-background min-h-screen">
        <Home />
        <Services />
        <Portfolio />
        <Contact />
        
        {/* Footer for content area */}
        <footer className="py-8 text-center text-neutral-600 text-sm border-t border-neutral-800 mx-6 lg:mx-12">
          <p>Designed with React & Tailwind CSS</p>
        </footer>
      </main>

    </div>
  );
};

export default App;