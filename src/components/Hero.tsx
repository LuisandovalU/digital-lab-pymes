import { ArrowRight, Terminal } from 'lucide-react';
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

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20">
      
      {/* Vercel-style Laser Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-center">
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[800px] h-[300px] bg-[#32b5ff] rounded-[100%] blur-[120px] opacity-20 -rotate-12 translate-y-[-20%]"
        />
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-[600px] h-[200px] bg-[#ff00ff] rounded-[100%] blur-[100px] opacity-20 rotate-12 translate-y-[10%]"
        />
      </div>
      
      {/* Spotlight Effect */}
      <motion.div 
        className="absolute w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 40 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-20 w-full">
        <div className="flex flex-col items-center text-center w-full">
          {/* Tech Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="group relative inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-glow-laser mb-8 md:mb-10 transition-all duration-500 cursor-default"
          >
            <Terminal className="w-4 h-4 text-[#32b5ff]" />
            <span className="text-[10px] md:text-xs font-mono tracking-widest text-white/80 uppercase group-hover:text-white transition-colors">
              Agencia de Desarrollo Tecnológico
            </span>
          </motion.div>

          {/* Vercel Style Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl lg:text-[100px] font-extrabold mb-8 md:mb-10 leading-[1.1] md:leading-[1] tracking-tighter w-full max-w-5xl text-white"
          >
            Arquitectura. <br />
            Lógica. <br />
            <span className="text-gradient-laser pb-2 inline-block">Aplicaciones a Medida.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-xl text-gray-400 mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed font-light px-4"
          >
            Traducimos tu <strong className="text-white font-medium">lógica de negocio</strong> en plataformas robustas y de alto rendimiento. Especialistas en desarrollo web, integraciones y ecosistemas digitales escalables.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full sm:w-auto group relative bg-white text-black px-10 py-4 rounded-md transition-all duration-300 font-bold text-sm overflow-hidden border border-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Iniciar Proyecto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="w-full sm:w-auto text-white px-10 py-4 transition-all duration-300 font-medium text-sm border border-white/10 hover:border-white/30 rounded-md bg-white/5 hover:bg-white/10 glass"
            >
              Explorar Servicios
            </button>
          </motion.div>

          {/* Mini Stats / Logos */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-24 md:mt-32 w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 border-t border-white/10 pt-10"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
               <span className="text-xs font-mono tracking-[0.2em] text-gray-400 uppercase w-full md:w-auto mb-2 md:mb-0 text-center">Stack Tecnológico</span>
               <span className="text-lg font-bold text-white">React</span>
               <span className="text-lg font-bold text-white">Node.js</span>
               <span className="text-lg font-bold text-white">Next.js</span>
               <span className="text-lg font-bold text-white">TypeScript</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}