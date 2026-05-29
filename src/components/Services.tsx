import { Code2, Zap, Search, Palette, Globe, Layers, ArrowUpRight } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { useState, type MouseEvent } from 'react';

function ServiceCard({ service, index }: { service: any; index: number }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-2xl glass-strong border-glow p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#32b5ff]/30 ${service.className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(50, 181, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center mb-10 border border-white/5 group-hover:border-[#32b5ff]/40 transition-colors duration-500 shadow-xl">
          {service.icon}
        </div>
        <h3 className="text-2xl font-extrabold text-white mb-4 leading-tight">
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm font-light leading-relaxed mb-8 max-w-[280px] group-hover:text-gray-300 transition-colors">
          {service.description}
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2">
        {service.tags.map((tag: string) => (
          <span key={tag} className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase px-3 py-1.5 bg-black/40 rounded-md border border-white/5 text-gray-500 group-hover:text-[#32b5ff] transition-colors">
            {tag}
          </span>
        ))}
      </div>

      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
        <ArrowUpRight className="w-5 h-5 text-[#32b5ff]" />
      </div>
    </motion.div>
  );
}

export function Services() {
  const services = [
    {
      icon: <Code2 className="w-6 h-6 text-[#32b5ff]" />,
      title: 'Ingeniería Web',
      description: 'Plataformas de alta disponibilidad, rápidas y construidas con arquitecturas modernas.',
      tags: ['NEXT.JS', 'REACT', 'ASTRO'],
      className: 'md:col-span-12 lg:col-span-8 lg:row-span-2',
    },
    {
      icon: <Layers className="w-6 h-6 text-[#ff00ff]" />,
      title: 'Lógica Backend',
      description: 'APIs robustas y bases de datos optimizadas para manejar tu lógica de negocio.',
      tags: ['NODE', 'APIS', 'DB'],
      className: 'md:col-span-6 lg:col-span-4 lg:row-span-1',
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: 'Performance Óptimo',
      description: 'Auditorías de rendimiento y optimización extrema de tiempos de carga.',
      tags: ['VITAL SIGNS', 'LCP'],
      className: 'md:col-span-6 lg:col-span-4 lg:row-span-1',
    },
    {
      icon: <Globe className="w-6 h-6 text-gray-400" />,
      title: 'Escalabilidad Global',
      description: 'Despliegues en el edge, listos para servir usuarios en todo el mundo sin latencia.',
      tags: ['EDGE', 'CDN'],
      className: 'md:col-span-6 lg:col-span-6 lg:row-span-1',
    },
    {
      icon: <Search className="w-6 h-6 text-[#32b5ff]" />,
      title: 'Sistemas Modulares',
      description: 'Integraciones complejas y desarrollo de módulos específicos para tu flujo de trabajo.',
      tags: ['SAAS', 'MODULAR'],
      className: 'md:col-span-6 lg:col-span-6 lg:row-span-1',
    },
  ];

  return (
    <section id="servicios" className="relative py-40 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[1px] bg-[#32b5ff]" />
            <span className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase text-[#32b5ff]">Nuestras Capacidades</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-extrabold text-white mb-10 leading-[1] tracking-tighter"
          >
            Soluciones para <br /><span className="text-gradient-laser pb-2 inline-block">Líderes Digitales</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl"
          >
            Ingeniería de software y diseño web adaptado a tu lógica de negocio. Construimos infraestructuras preparadas para el futuro.
          </motion.p>
        </div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-fr gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}