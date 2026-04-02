import { Menu, Rocket, Eye } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export function Header() {
  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <>
      <header
        className="absolute top-0 left-0 right-0 z-50 py-6 md:py-10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between transition-all duration-700 px-6 py-3 rounded-full bg-transparent">
            {/* Logo - Centered on Mobile, Left-aligned on Desktop */}
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <div 
                className="flex items-center gap-3 cursor-pointer group scale-90 md:scale-100" 
                onClick={() => handleNavClick('hero')}
              >
                <div className="w-8 h-8 md:w-9 md:h-9 bg-primary rounded-xl flex items-center justify-center shadow-xl shadow-primary/20 group-hover:rotate-12 transition-all duration-500">
                  <Rocket className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2} />
                </div>
                <span className="text-xl font-bold tracking-tight text-white font-title">
                  Digital<span className="text-primary italic">Lab</span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {['Servicios', 'Filosofía', 'Portafolio', 'Precios'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="text-[13px] font-medium text-gray-400 hover:text-white transition-all duration-300 relative group uppercase tracking-widest"
                >
                  {item}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary transition-all duration-500 group-hover:w-4" />
                </button>
              ))}
              <div className="w-[1px] h-4 bg-white/10 mx-2" />
              <button
                onClick={() => handleNavClick('contacto')}
                className="group relative px-6 py-2.5 rounded-full bg-white text-[13px] font-bold text-black hover:bg-primary hover:text-white transition-all duration-700 overflow-hidden"
              >
                <span className="relative z-10 uppercase tracking-wider">Inicia Proyecto</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation (Floating Style) */}
      <nav className="md:hidden fixed bottom-6 left-6 right-6 z-50 glass-strong border border-white/10 rounded-2xl shadow-2xl overflow-hidden pb-safe">
        <div className="grid grid-cols-5 gap-1 px-2 py-3">
          {[
            { id: 'servicios', icon: Menu, label: 'Servicios' },
            { id: 'filosofia', icon: Eye, label: 'Visión' },
            { id: 'portafolio', icon: Rocket, label: 'Proyectos' },
            { id: 'precios', icon: (props: any) => (
              <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ), label: 'Precios' },
            { id: 'contacto', icon: (props: any) => (
              <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            ), label: 'Contacto' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="flex flex-col items-center gap-0.5 text-gray-500 hover:text-white transition-all duration-300"
            >
              <item.icon className="w-4 h-4" />
              <span className="text-[8px] font-bold uppercase tracking-tighter">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}