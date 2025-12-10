import React from 'react';
import { EXPERIENCE, EDUCATION, SKILLS } from '../../constants';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Resume</h2>
          <h3 className="text-3xl font-serif font-bold text-textMain">Experience & Skills</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Timeline */}
          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-textMain mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Work History
              </h4>
              <div className="relative border-l border-neutral-800 ml-3 space-y-10 pl-8 pb-4">
                {EXPERIENCE.map((job) => (
                  <div key={job.id} className="relative">
                    <span className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background"></span>
                    <span className="text-sm text-primary font-mono mb-1 block">{job.period}</span>
                    <h5 className="text-lg font-bold text-textMain">{job.role}</h5>
                    <p className="text-sm text-neutral-400 mb-2">{job.company}</p>
                    <p className="text-textMuted text-sm leading-relaxed">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-textMain mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Education
              </h4>
              <div className="relative border-l border-neutral-800 ml-3 space-y-10 pl-8 pb-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="relative">
                    <span className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-neutral-600 bg-background"></span>
                    <span className="text-sm text-neutral-500 font-mono mb-1 block">{edu.period}</span>
                    <h5 className="text-lg font-bold text-textMain">{edu.role}</h5>
                    <p className="text-sm text-neutral-400 mb-2">{edu.company}</p>
                    <p className="text-textMuted text-sm leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div>
            <h4 className="text-xl font-bold text-textMain mb-8">Professional Skills</h4>
            <div className="space-y-8">
              {SKILLS.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-textMain font-medium">{skill.name}</span>
                    <span className="text-textMuted text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote / Highlight */}
            <div className="mt-16 p-8 bg-surface border-l-4 border-primary rounded-r-xl">
              <blockquote className="text-lg italic text-textMuted leading-relaxed">
                "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence."
              </blockquote>
              <div className="mt-4 text-primary font-bold">— Abigail Adams</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;