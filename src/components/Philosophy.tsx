import { Target, Eye, Rocket, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Philosophy() {
  const objectives = [
    {
      title: 'Funcionalidad & Estética',
      desc: 'Entregar sitios web que no solo sean visualmente atractivos, sino 100% operativos.',
    },
    {
      title: 'Crecimiento Digital',
      desc: 'Aumentar la presencia y autoridad digital de cada uno de nuestros clientes.',
    },
    {
      title: 'Innovación Constante',
      desc: 'Operar bajo los más altos estándares de calidad, honestidad e innovación técnica.',
    },
  ];

  return (
    <section id="filosofia" className="relative py-40 bg-[#050505] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full" />
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
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Nuestro Propósito</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-[0.9] tracking-tighter">
              Impulsando <br /><span className="italic text-primary font-title font-medium">Negocios en Desarrollo</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-white uppercase tracking-widest text-[13px]">Propósito</h3>
            </div>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Desarrollamos soluciones digitales personalizadas y escalables para pequeñas y medianas empresas. Somos el aliado que profesionaliza tu imagen y impulsa tus resultados.
            </p>
          </motion.div>
        </div>

        {/* Vision & Objectives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vision card (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 p-12 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-10">
              <Eye className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-white uppercase tracking-widest text-[13px]">Visión</h3>
            </div>
            <p className="text-3xl md:text-5xl font-medium text-white font-title leading-tight italic">
              "Ser el referente confiable para negocios en desarrollo que buscan crecer mediante soluciones digitales innovadoras y sostenibles."
            </p>
          </motion.div>

          {/* Objectives Column */}
          <div className="space-y-4">
            {[
              { title: 'Resultados Reales', desc: 'Sitios web visualmente atractivos y 100% operativos.' },
              { title: 'Autoridad Digital', desc: 'Aumentamos la presencia digital de cada cliente.' },
              { title: 'Calidad Sin Excusas', desc: 'Operamos con los más altos estándares técnicos.' }
            ].map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-colors duration-500"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">{obj.title}</h4>
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
