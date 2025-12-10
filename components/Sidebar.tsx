import React, { useState } from 'react';
import { 
  Home, 
  User, 
  Briefcase, 
  Layers, 
  Mail, 
  Menu, 
  X, 
  Linkedin, 
  Twitter, 
  Dribbble,
  Download
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Services', href: '#services', icon: Briefcase },
  { label: 'Portfolio', href: '#portfolio', icon: Layers },
  { label: 'Contact', href: '#contact', icon: Mail },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-surface border-b border-neutral-800 p-4 flex justify-between items-center">
        <span className="font-serif font-bold text-xl text-textMain">{PERSONAL_INFO.name}</span>
        <button onClick={toggleMenu} className="text-textMain hover:text-primary transition-colors">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 h-full w-72 bg-surface border-r border-neutral-800 z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:block
      `}>
        <div className="flex flex-col h-full overflow-y-auto p-8">
          
          {/* Profile Header */}
          <div className="text-center mb-10 mt-12 lg:mt-0">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-neutral-800 shadow-xl">
              <img 
                src="https://picsum.photos/400/400?grayscale" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-serif font-bold text-textMain mb-2">{PERSONAL_INFO.name}</h1>
            <p className="text-primary text-sm font-medium uppercase tracking-wider">{PERSONAL_INFO.title}</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 px-4 py-3 text-textMuted hover:text-primary hover:bg-neutral-800/50 rounded-lg transition-all group"
                  >
                    <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium tracking-wide">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials & Resume */}
          <div className="mt-8 pt-8 border-t border-neutral-800">
            <div className="flex justify-center gap-4 mb-6">
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-textMuted hover:bg-primary hover:text-white transition-all">
                <Linkedin size={16} />
              </a>
              <a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-textMuted hover:bg-primary hover:text-white transition-all">
                <Twitter size={16} />
              </a>
              <a href={PERSONAL_INFO.socials.dribbble} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-textMuted hover:bg-primary hover:text-white transition-all">
                <Dribbble size={16} />
              </a>
            </div>
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-800 hover:bg-primary text-textMain rounded-lg transition-colors text-sm font-semibold"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-8 text-center text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}
          </div>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;