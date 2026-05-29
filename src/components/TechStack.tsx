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
              <div className="w-10 h-[1px] bg-[#32b5ff]" />
              <span className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase text-[#32b5ff]">Arquitectura</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-[1] tracking-tighter">
              Cero Plantillas. <br />
              <span className="text-gradient-laser pb-2 inline-block">Infinito Potencial.</span>
            </h2>

            <div className="space-y-8 max-w-xl">
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                No usamos moldes genéricos. Construimos tu infraestructura de forma <span className="text-white font-bold">modular</span>, permitiendo una flexibilidad total para tu lógica de negocio.
              </p>

              <div className="p-8 rounded-2xl glass border-l-[#32b5ff] border-l-4">
                <p className="text-white font-mono text-[13px] leading-relaxed">
                  "Como bloques de código: estructuramos tu ecosistema desde cero para que sea escalable, mantenible y evolucione con tu producto."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Tech/Modular Concept */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square flex items-center justify-center scale-75 md:scale-100 [perspective:1000px]"
            >
              <div className="absolute inset-0 bg-[#32b5ff]/10 blur-[120px] rounded-full pointer-events-none" />
              
              <motion.div 
                className="relative grid grid-cols-2 gap-6"
                initial={{ rotateX: 30, rotateY: -20, rotateZ: 10, scale: 0.8 }}
                whileInView={{ rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                {[
                  { icon: <Layers />, label: 'UI', color: 'text-[#32b5ff]' },
                  { icon: <Cpu />, label: 'Logic', color: 'text-[#ff00ff]' },
                  { icon: <Database />, label: 'Data', color: 'text-white' },
                  { icon: <Layout />, label: 'Style', color: 'text-gray-400' }
                ].map((item, i) => (
                   <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5, z: -100 }}
                    whileInView={{ opacity: 1, scale: 1, z: 0 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ 
                      y: { repeat: Infinity, duration: 4, delay: i * 0.5, ease: "easeInOut" },
                      default: { delay: 0.2 * i, duration: 0.8, type: "spring" }
                    }}
                    className="w-32 h-32 md:w-40 md:h-40 glass-strong rounded-2xl border border-white/5 flex flex-col items-center justify-center group hover:border-[#32b5ff]/50 transition-all duration-500 cursor-pointer relative overflow-hidden shadow-2xl bg-black/40 backdrop-blur-3xl"
                   >
                     {/* Laser Glow Effect on Hover */}
                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#32b5ff]/10 to-[#ff00ff]/10" />

                     <div className={`${item.color} w-12 h-12 mb-3 relative z-10 group-hover:scale-110 transition-transform duration-500`}>{item.icon}</div>
                     <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors relative z-10">{item.label}</span>
                     
                     {/* Tech dots */}
                     <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-30 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#32b5ff] shadow-[0_0_10px_#32b5ff]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff00ff] shadow-[0_0_10px_#ff00ff]" />
                     </div>
                   </motion.div>
                ))}
              </motion.div>
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
