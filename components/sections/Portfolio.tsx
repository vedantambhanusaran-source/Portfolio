import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight, Play, Maximize2, X, ZoomIn, ZoomOut } from 'lucide-react';
import { MediaItem } from '../../types';

const GalleryComponent: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomMode, setZoomMode] = useState<'contain' | 'zoom'>('contain');
  const [zoomScale, setZoomScale] = useState(1);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Handle Modal Open
  const openModal = () => {
    setIsModalOpen(true);
    setZoomMode('contain');
    setZoomScale(1);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleZoomIn = () => {
    if (zoomMode === 'contain') {
      setZoomMode('zoom');
      setZoomScale(1); // Start at 100% width relative to container
    } else {
      setZoomScale((prev) => Math.min(prev + 0.25, 3));
    }
  };

  const handleZoomOut = () => {
    if (zoomMode === 'zoom') {
      if (zoomScale <= 0.5) {
        setZoomMode('contain');
      } else {
        setZoomScale((prev) => Math.max(prev - 0.25, 0.5));
      }
    }
  };

  return (
    <>
      <div className="relative group w-full h-96 md:h-[800px] bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-neutral-800">
        <div 
          className="w-full h-full transition-transform duration-500 ease-out flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="w-full h-full shrink-0 flex items-center justify-center bg-neutral-950 p-4">
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="max-w-full max-h-full object-contain cursor-zoom-in"
                onClick={openModal}
              />
            </div>
          ))}
        </div>
        
        {/* Controls Overlay */}
        <div className="absolute inset-0 pointer-events-none"></div>

        {/* Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button 
            onClick={(e) => { e.preventDefault(); prev(); }}
            className="p-3 bg-black/60 text-white rounded-full hover:bg-primary hover:text-white backdrop-blur-md transition-all shadow-lg pointer-events-auto"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); next(); }}
            className="p-3 bg-black/60 text-white rounded-full hover:bg-primary hover:text-white backdrop-blur-md transition-all shadow-lg pointer-events-auto"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Zoom Button (Top Right) */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
          <button
            onClick={openModal}
            className="p-2 bg-black/60 text-white rounded-lg hover:bg-primary hover:text-white backdrop-blur-md transition-all shadow-lg"
          >
            <Maximize2 size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all shadow-sm ${
                idx === currentIndex ? 'bg-primary w-8' : 'bg-white/40 w-2 hover:bg-white/60'
              }`} 
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col">
          {/* Toolbar */}
          <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm border-b border-neutral-800">
            <div className="text-white/70 text-sm font-medium">
              Image {currentIndex + 1} of {images.length}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-neutral-800 rounded-lg p-1">
                <button 
                  onClick={handleZoomOut}
                  className="p-2 hover:bg-neutral-700 rounded text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  disabled={zoomMode === 'contain'}
                  title="Zoom Out"
                >
                  <ZoomOut size={20} />
                </button>
                <span className="text-white text-xs font-mono w-16 text-center select-none">
                  {zoomMode === 'contain' ? 'FIT' : `${Math.round(zoomScale * 100)}%`}
                </span>
                <button 
                  onClick={handleZoomIn}
                  className="p-2 hover:bg-neutral-700 rounded text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  disabled={zoomScale >= 3}
                  title="Zoom In"
                >
                  <ZoomIn size={20} />
                </button>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 bg-neutral-800 hover:bg-red-500/20 hover:text-red-500 rounded-lg text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div 
            className="flex-1 overflow-auto flex items-center justify-center p-4 cursor-default" 
            onClick={(e) => { if(e.target === e.currentTarget) closeModal(); }}
          >
            <img 
              src={images[currentIndex]} 
              alt="Zoomed View" 
              className={`transition-all duration-200 ${
                zoomMode === 'contain' 
                  ? 'max-w-full max-h-full object-contain' 
                  : 'max-w-none'
              }`}
              style={zoomMode === 'zoom' ? { width: `${zoomScale * 100}%` } : {}}
            />
          </div>
        </div>
      )}
    </>
  );
};

const MediaGrid: React.FC<{ items: MediaItem[] }> = ({ items }) => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row gap-4 h-full">
      {items.map((item, idx) => {
        const isPlaying = activeVideo === idx;
        const showThumbnail = item.type === 'video' && item.thumbnail && !isPlaying;

        return (
          <div key={idx} className="flex-1 w-full h-64 md:h-[400px] rounded-xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900 relative group">
            {item.type === 'video' ? (
              showThumbnail ? (
                 <button 
                  onClick={() => setActiveVideo(idx)}
                  className="w-full h-full relative block group/video cursor-pointer"
                  aria-label={`Play ${item.label || 'video'}`}
                >
                  <img 
                    src={item.thumbnail} 
                    alt={item.label} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/video:bg-black/30 transition-colors">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center text-white shadow-lg group-hover/video:scale-110 transition-transform">
                      <Play size={32} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                  {item.label && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-left">
                      <span className="text-white font-medium text-sm">{item.label}</span>
                    </div>
                  )}
                </button>
              ) : (
                <iframe 
                  src={isPlaying ? `${item.url}${item.url.includes('?') ? '&' : '?'}autoplay=1` : item.url}
                  title={item.label} 
                  className="w-full h-full" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              )
            ) : (
               <a href={item.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                  {item.thumbnail ? (
                     <img src={item.thumbnail} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-800">
                       <ExternalLink className="text-neutral-600" size={48} />
                    </div>
                  )}
                 
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white mb-2">
                        <ExternalLink size={24} />
                     </div>
                     {item.label && <span className="text-white font-bold tracking-wide">{item.label}</span>}
                  </div>
                  
                  {item.label && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="text-white font-medium text-sm">{item.label}</span>
                    </div>
                  )}
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 px-6 lg:px-12 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Portfolio</h2>
          <h3 className="text-3xl font-serif font-bold text-textMain">Featured Projects</h3>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            const hasGallery = !!project.gallery && project.gallery.length > 0;
            const hasMediaItems = !!project.mediaItems && project.mediaItems.length > 0;

            return (
              <div 
                key={project.id} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Side */}
                <div className="flex-1 space-y-6">
                  <div className="text-primary text-sm font-bold tracking-wider uppercase mb-2">
                    {project.category}
                  </div>
                  <h4 className="text-3xl font-serif font-bold text-textMain">
                    {project.title}
                  </h4>
                  <p className="text-textMuted text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 py-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-xs font-mono text-neutral-400 border border-neutral-800 px-3 py-1 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a 
                      href={project.link} 
                      className="inline-flex items-center gap-2 text-textMain font-semibold hover:text-primary transition-colors group mt-4"
                    >
                      View Project
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>

                {/* Media Side */}
                <div className="flex-1 w-full">
                  {hasGallery ? (
                    <GalleryComponent images={project.gallery!} />
                  ) : hasMediaItems ? (
                    <MediaGrid items={project.mediaItems!} />
                  ) : (
                    <a href={project.link || "#"} className="block group relative w-full h-64 md:h-[400px] rounded-xl overflow-hidden shadow-2xl border border-neutral-800">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white">
                          <ExternalLink size={32} />
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;