import React from 'react';
import { SERVICES } from '../../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">What I Do</h2>
          <h3 className="text-3xl font-serif font-bold text-textMain">Specialized Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 bg-surface border border-neutral-800 hover:border-primary/50 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-textMain mb-3">{service.title}</h4>
              <p className="text-textMuted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;