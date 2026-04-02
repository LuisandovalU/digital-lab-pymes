import { motion } from 'motion/react';
import { Layers, Database, Cpu, Layout } from 'lucide-react';

export function TechStack() {
  const techs = [
    { name: 'Astro', logo: 'https://cdn.simpleicons.org/astro' },
    { name: 'React', logo: 'https://cdn.simpleicons.org/react' },
    { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript' },
    { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel/white' },
    { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma' },
    { name: 'Gemini', logo: 'https://cdn.simpleicons.org/googlegemini' },
    { name: 'Claude', logo: 'https://cdn.simpleicons.org/anthropic' },
    { name: 'Tailwind', logo: 'https://cdn.simpleicons.org/tailwindcss' },
    { name: 'Framer', logo: 'https://cdn.simpleicons.org/framer' },
  ];

  return (
    <section id="tech" className="relative py-40 bg-[#050505] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Philosophy & Lego Concept */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">El Cómo</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-[0.9] tracking-tighter">
              Cero Plantillas. <br />
              <span className="italic text-primary font-title font-medium">Infinito Potencial.</span>
            </h2>

            <div className="space-y-8 max-w-xl">
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                No usamos moldes genéricos. Construimos tu proyecto de forma <span className="text-white font-bold">modular</span>, permitiendo una flexibilidad total y resultados únicos.
              </p>

              <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 border-l-primary/50 border-l-4">
                <p className="text-white font-medium text-lg italic">
                  "Como un Lego: estructuramos tu web desde cero para que sea escalable, editable y evolucione con tu negocio."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Lego/Modular Concept */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square flex items-center justify-center scale-75 md:scale-100"
            >
              <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full" />
              
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { icon: <Layers />, label: 'UI', color: 'text-primary' },
                  { icon: <Cpu />, label: 'Logic', color: 'text-indigo-400' },
                  { icon: <Database />, label: 'Data', color: 'text-emerald-400' },
                  { icon: <Layout />, label: 'Style', color: 'text-amber-400' }
                ].map((item, i) => (
                   <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 * (i % 2 ? 1 : -1) }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * i, duration: 0.8, type: "spring" }}
                    className="w-32 h-32 md:w-36 md:h-36 glass-strong rounded-3xl border border-white/10 flex flex-col items-center justify-center group hover:border-primary/50 transition-all duration-500"
                   >
                     <div className={`${item.color} w-10 h-10 mb-2`}>{item.icon}</div>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 opacity-50">{item.label}</span>
                     
                     {/* Lego studs */}
                     <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-20">
                        <div className="w-2 h-2 rounded-full bg-white" />
                        <div className="w-2 h-2 rounded-full bg-white" />
                     </div>
                   </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scrolling Tech Marquee with OFFICIAL LOGOS */}
        <div className="mt-40 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex overflow-hidden group">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-16 whitespace-nowrap py-10"
            >
              {[...techs, ...techs].map((tech, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center p-3 group-hover/item:border-primary/50 transition-all duration-500">
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      width="56"
                      height="56"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <span className="text-2xl font-bold text-white/20 group-hover/item:text-white transition-colors duration-500 uppercase tracking-tighter">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
