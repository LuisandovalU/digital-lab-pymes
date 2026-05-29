import { Target, Eye, Rocket, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Philosophy() {
  const objectives = [
    {
      title: 'Lógica & Estética',
      desc: 'Entregar plataformas web que no solo sean visualmente atractivas, sino 100% operativas.',
    },
    {
      title: 'Escalabilidad Tecnológica',
      desc: 'Sistemas diseñados para crecer junto a la demanda de tu negocio.',
    },
    {
      title: 'Innovación Constante',
      desc: 'Operar bajo los más altos estándares de calidad de software e innovación técnica.',
    },
  ];

  return (
    <section id="filosofia" className="relative py-40 bg-transparent overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center items-center">
        <div className="absolute w-[500px] h-[500px] bg-[#32b5ff] blur-[150px] rounded-full translate-x-[-50%]" />
        <div className="absolute w-[500px] h-[500px] bg-[#ff00ff] blur-[150px] rounded-full translate-x-[50%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-[#32b5ff]" />
              <span className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase text-[#32b5ff]">Nuestro Propósito</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-[1] tracking-tighter">
              Impulsando <br /><span className="text-gradient-laser pb-2 inline-block">Negocios en Desarrollo</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-10 rounded-2xl glass-strong border-glow"
          >
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-6 h-6 text-[#32b5ff]" />
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-[0.2em]">Propósito</h3>
            </div>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Desarrollamos soluciones digitales personalizadas y escalables. Somos el aliado técnico que profesionaliza tu lógica de negocio e impulsa tus resultados con código de alto nivel.
            </p>
          </motion.div>
        </div>

        {/* Vision & Objectives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Vision card (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 p-12 rounded-2xl glass border border-white/10 hover:border-[#ff00ff]/30 transition-colors duration-500 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-10">
              <Eye className="w-6 h-6 text-[#ff00ff]" />
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-[0.2em]">Visión</h3>
            </div>
            <p className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Ser el framework de confianza para empresas que buscan escalar mediante soluciones web robustas y arquitecturas modernas.
            </p>
          </motion.div>

          {/* Objectives Column */}
          <div className="space-y-4">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-8 rounded-2xl glass hover:border-glow-laser transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#32b5ff] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-mono font-bold mb-2 text-[11px] uppercase tracking-widest">{obj.title}</h4>
                    <p className="text-gray-500 text-xs font-light leading-relaxed">{obj.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
