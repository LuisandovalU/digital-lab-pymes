import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { scrollToSection } from '../utils/scroll';
import { motion, useScroll, useTransform } from 'motion/react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Specific line-break structure requested by the user
  const phrase = [
    { text: "Transformamos", color: "text-white" },
    { text: "visiones", color: "text-primary italic font-title font-medium" },
    { text: "en", color: "text-white" },
    { text: "legados", color: "text-primary italic font-title font-medium" },
    { text: "digitales.", color: "text-white" }
  ];

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[120px]"
        />
      </div>
      
      {/* Spotlight Effect */}
      <motion.div 
        className="absolute w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0 opacity-50"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 40 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* SMB Focus Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 md:mb-10 hover:border-primary/50 transition-colors duration-500 cursor-default"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400 group-hover:text-white transition-colors">
              Impulso Digital para Pymes
            </span>
          </motion.div>

          {/* New Focused Headline with Responsive Sizing */}
          <h1 className="text-4xl md:text-8xl lg:text-[110px] font-bold mb-8 md:mb-10 leading-[1.1] md:leading-[0.9] tracking-tight max-w-4xl">
            <div className="flex flex-col items-center">
              {phrase.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.1,
                    ease: [0.2, 0.65, 0.3, 0.9]
                  }}
                  className={`inline-block ${word.color}`}
                >
                  {word.text}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* SMB Focused Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-base md:text-xl text-gray-500 mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed font-light px-4"
          >
            Escalamos negocios en desarrollo con soluciones digitales de alto nivel. Potenciamos tu visión con tecnología moderna y sin límites.
          </motion.p>

          {/* Accessible CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full sm:w-auto group relative bg-white text-black px-10 md:px-12 py-4 md:py-5 rounded-full transition-all duration-700 font-bold text-sm overflow-hidden"
            >
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-widest">
                Comenzar ahora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('portafolio')}
              className="w-full sm:w-auto text-gray-400 hover:text-white px-8 md:px-10 py-4 md:py-5 transition-all duration-500 font-medium text-sm border border-white/5 md:border-transparent hover:border-white/10 rounded-full"
            >
              Nuestros trabajos
            </button>
          </motion.div>

          {/* Growing Together Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-24 md:mt-40 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 border-t border-white/5 pt-10"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               <span className="text-[10px] md:text-sm font-bold tracking-widest text-white uppercase opacity-50 w-full md:w-auto mb-4 md:mb-0">Empresas en expansión</span>
               <span className="text-lg md:text-xl font-bold font-title uppercase">Logistics</span>
               <span className="text-lg md:text-xl font-bold font-title uppercase">Retail</span>
               <span className="text-lg md:text-xl font-bold font-title uppercase">Tech</span>
            </div>
            <div className="flex gap-10 md:gap-16">
              {[
                { value: '100+', label: 'NEGOCIOS' },
                { value: '500%', label: 'CRECIMIENTO' }
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[9px] md:text-[10px] font-bold tracking-widest text-gray-500 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}