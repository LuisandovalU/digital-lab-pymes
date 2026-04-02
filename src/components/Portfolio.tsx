import { TrendingUp, Clock, ShoppingCart, ArrowUpRight, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className={`group relative ${index % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
    >
      <div className="relative overflow-hidden rounded-[3rem] bg-white/[0.02] border border-white/5 transition-all duration-700 group-hover:border-primary/30">
        {/* Image Container */}
        <div className={`relative overflow-hidden ${index % 3 === 0 ? 'h-[600px]' : 'h-[500px]'}`}>
          <div className="absolute inset-0 bg-[#050505]/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
          
          {/* Performance Optimized Native Image */}
          <motion.img 
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 font-sans"
          />
          
          {/* Top Info */}
          <div className="absolute top-10 left-10 z-20 flex justify-between w-[calc(100%-80px)]">
            <span className="px-5 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-[9px] font-bold tracking-[0.2em] uppercase text-white">
              {project.category}
            </span>
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>

          {/* Title on Image (Bottom) */}
          <div className="absolute bottom-10 left-10 z-20 max-w-lg">
             <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-title leading-tight">
                {project.title}
             </h3>
             <p className="text-gray-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.description}
             </p>
          </div>
        </div>

        {/* Results / Specs (Bottom Bar) */}
        <div className="p-8 border-t border-white/5 bg-white/[0.01]">
           <div className="flex flex-wrap gap-4 items-center">
              {project.results.map((res: any, i: number) => (
                <div key={i} className="flex items-center gap-3 bg-white/[0.03] px-5 py-2.5 rounded-2xl border border-white/5">
                   <span className="text-primary">{res.icon}</span>
                   <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">{res.label}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const cases = [
    {
      title: 'E-commerce Pro',
      category: 'E-commerce',
      description: 'Plataforma de ventas optimizada para conversión y escalabilidad.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600',
      results: [
        { icon: <TrendingUp className="w-4 h-4" />, label: '+320% Ventas' },
        { icon: <Clock className="w-4 h-4" />, label: '0.8s LCP' },
      ],
    },
    {
      title: 'SaaS Dashboard',
      category: 'Software',
      description: 'Panel de control intuitivo para la gestión de datos empresariales.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
      results: [
        { icon: <ShoppingCart className="w-4 h-4" />, label: '+85% Eficiencia' },
      ],
    },
    {
      title: 'Identidad Visual AI',
      category: 'Branding',
      description: 'Suite de identidad digital impulsada por inteligencia artificial.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9256?auto=format&fit=crop&q=80&w=1600',
      results: [
        { icon: <TrendingUp className="w-4 h-4" />, label: '+180% Leads' },
      ],
    },
  ];

  return (
    <section id="portafolio" className="relative py-40 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Showcase</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-bold text-white leading-[0.9] tracking-tight"
            >
              Proyectos de <br /><span className="italic text-primary font-title font-medium">Alto Impacto</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 max-w-sm font-light text-xl leading-relaxed"
          >
            Donde la ingeniería de precisión se encuentra con la estética de vanguardia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Global CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center"
        >
          <button
            onClick={() => scrollToSection('contacto')}
            className="group inline-flex flex-col items-center gap-6"
          >
            <span className="text-xl font-bold tracking-widest text-gray-500 uppercase group-hover:text-white transition-colors duration-500">¿Listo para elevar tu marca?</span>
            <div className="flex items-center gap-4">
               <span className="text-4xl md:text-6xl font-bold text-white font-title group-hover:text-primary transition-colors duration-500">Hablemos de tu visión</span>
               <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700">
                  <ArrowRight className="w-7 h-7 text-white group-hover:translate-x-1 transition-transform" />
               </div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}