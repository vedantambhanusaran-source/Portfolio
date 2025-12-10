import React from 'react';
import { PERSONAL_INFO } from '../../constants';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Contact</h2>
          <h3 className="text-3xl font-serif font-bold text-textMain">Get In Touch</h3>
        </div>

        <div className="max-w-xl">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-textMain font-bold mb-1">Location</h4>
                <p className="text-textMuted">{PERSONAL_INFO.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-textMain font-bold mb-1">Email</h4>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-textMuted hover:text-primary transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-textMain font-bold mb-1">Phone</h4>
                <p className="text-textMuted">{PERSONAL_INFO.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;