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
      <div className="relative overflow-hidden rounded-[2rem] glass border-glow transition-all duration-700 group-hover:border-[#32b5ff]/30">
        {/* Image Container */}
        <div className={`relative overflow-hidden ${index % 3 === 0 ? 'h-[600px]' : 'h-[500px]'}`}>
          {/* Base Overlay */}
          <div className="absolute inset-0 bg-[#000000]/60 group-hover:bg-[#000000]/10 transition-colors duration-700 z-10" />
          
          {/* Text Protection Gradient (shows on hover) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
          
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
            <span className="px-5 py-2 rounded-md bg-black/60 backdrop-blur-xl border border-white/10 text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white shadow-lg">
              {project.category}
            </span>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-md bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl pointer-events-auto">
              <ArrowUpRight className="w-6 h-6" />
            </a>
          </div>

          {/* Title on Image (Bottom) */}
          <div className="absolute bottom-10 left-10 z-20 max-w-lg">
             <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight drop-shadow-xl">
                {project.title}
             </h3>
             <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-2 group-hover:translate-y-0 drop-shadow-md">
                <span className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg inline-block border border-white/10">
                  {project.description}
                </span>
             </p>
          </div>
        </div>

        {/* Results / Specs (Bottom Bar) */}
        <div className="p-8 border-t border-white/5 bg-black/40">
           <div className="flex flex-wrap gap-4 items-center">
              {project.results.map((res: any, i: number) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-md border border-white/5">
                   <span className="text-[#32b5ff]">{res.icon}</span>
                   <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase">{res.label}</span>
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
      title: 'ICI México',
      category: 'Institucional',
      description: 'Sitio web oficial de la Iglesia Cristiana Internacional en México.',
      image: 'https://image.thum.io/get/width/1200/crop/800/https://www.icimexico.org/',
      link: 'https://www.icimexico.org/',
      results: [
        { icon: <TrendingUp className="w-4 h-4" />, label: 'Sitio Web' },
      ],
    },
    {
      title: 'Conferencia Mujeres',
      category: 'Evento',
      description: 'Landing page para la conferencia anual de mujeres de ICI.',
      image: 'https://image.thum.io/get/width/1200/crop/800/https://conferencia.icimexico.org/',
      link: 'https://conferencia.icimexico.org/',
      results: [
        { icon: <Clock className="w-4 h-4" />, label: 'Landing Page' },
      ],
    },
    {
      title: 'Cobalt Tools',
      category: 'Herramienta Web',
      description: 'Plataforma de herramientas y utilidades en línea.',
      image: 'https://image.thum.io/get/width/1200/crop/800/https://cobalt.tools/',
      link: 'https://cobalt.tools/',
      results: [
        { icon: <TrendingUp className="w-4 h-4" />, label: 'Web App' },
      ],
    },
    {
      title: 'Luis Sandoval Dev',
      category: 'Link in Bio',
      description: 'Centro de enlaces y redes sociales centralizado.',
      image: 'https://image.thum.io/get/width/1200/crop/800/https://www.luisandoval.dev/',
      link: 'https://www.luisandoval.dev/',
      results: [
        { icon: <ArrowUpRight className="w-4 h-4" />, label: 'Social Hub' },
      ],
    },
    {
      title: 'Campus Maxi Programa',
      category: 'E-Learning',
      description: 'Plataforma de cursos y capacitación online.',
      image: 'https://image.thum.io/get/width/1200/crop/800/https://campusmaxiprograma.com/login/index.php?loginredirect=1',
      link: 'https://campusmaxiprograma.com/login/index.php?loginredirect=1',
      results: [
        { icon: <Clock className="w-4 h-4" />, label: 'LMS Platform' },
      ],
    },
    {
      title: 'FightStats',
      category: 'Data Analytics',
      description: 'Plataforma de análisis de datos y predicciones para MMA basada en el algoritmo Nivarax.',
      image: 'https://image.thum.io/get/width/1200/crop/800/https://fightstats.org/',
      link: 'https://fightstats.org/',
      results: [
        { icon: <TrendingUp className="w-4 h-4" />, label: 'MMA Algorithm' },
      ],
    },
  ];

  return (
    <section id="portafolio" className="relative py-40 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1px] bg-[#32b5ff]" />
              <span className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase text-[#32b5ff]">Showcase</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-extrabold text-white leading-[1] tracking-tighter"
            >
              Proyectos de <br /><span className="text-gradient-laser font-extrabold pb-2 inline-block">Alto Impacto</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-sm font-light text-xl leading-relaxed"
          >
            Donde la ingeniería de precisión se encuentra con la funcionalidad técnica y escalabilidad.
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
            <span className="text-xs font-mono font-bold tracking-widest text-gray-500 uppercase group-hover:text-[#32b5ff] transition-colors duration-500">¿Listo para llevar tu lógica de negocio al siguiente nivel?</span>
            <div className="flex items-center gap-4">
               <span className="text-4xl md:text-6xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#32b5ff] group-hover:to-[#ff00ff] transition-all duration-500">Hablemos del proyecto</span>
               <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#32b5ff]/10 group-hover:border-[#32b5ff] group-hover:shadow-[0_0_20px_rgba(50,181,255,0.4)] transition-all duration-700">
                  <ArrowRight className="w-7 h-7 text-white group-hover:text-[#32b5ff] group-hover:translate-x-1 transition-transform" />
               </div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}