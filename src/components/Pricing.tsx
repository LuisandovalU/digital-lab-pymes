import { Check, Zap, Building2, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';
import { motion } from 'motion/react';

export function Pricing() {
  const plans = [
    {
      name: 'Emprende',
      icon: <Zap className="w-5 h-5 text-[#ff00ff]" />,
      description: 'Arquitectura base ideal para startups y negocios que están iniciando su expansión.',
      price: '$15,000',
      features: [
        'Landing Page de Alto Rendimiento',
        'Arquitectura Jamstack / SSR',
        'SEO Técnico Configurado',
        'Integración de APIs Básicas',
        'Soporte Técnico Especializado',
      ],
      highlighted: false,
      cta: 'Iniciar Despliegue',
    },
    {
      name: 'Escala',
      icon: <Building2 className="w-5 h-5 text-white" />,
      description: 'Infraestructura robusta para empresas que requieren lógica avanzada y escalabilidad.',
      price: '$20,000',
      features: [
        'Ecosistema Web Multi-Ruta',
        'Panel de Administración (Headless CMS)',
        'Sistemas E-commerce Pro',
        'Automatización de Flujos de Datos',
        'SLA y Soporte Técnico Continuo',
        'Optimización Core Web Vitals',
      ],
      highlighted: true,
      cta: 'Agendar Sesión Técnica',
    },
  ];

  return (
    <section id="precios" className="relative py-40 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 mb-8"
          >
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#32b5ff]">Inversión Inteligente</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-extrabold text-white mb-10 leading-[1] tracking-tighter"
          >
            Invierte en <br /><span className="text-gradient-laser font-extrabold pb-2 inline-block">Tu Infraestructura</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Nos ajustamos a tus necesidades y a tu bolsillo. Ponte en contacto con nosotros.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-[1px] rounded-[3rem] ${plan.highlighted ? 'bg-gradient-to-b from-[#32b5ff] to-[#ff00ff]' : 'bg-white/10'}`}
            >
              <div className="h-full bg-black/80 backdrop-blur-2xl rounded-[2.9rem] p-12 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-12">
                        <div className={`p-4 rounded-2xl border ${plan.highlighted ? 'bg-[#32b5ff]/10 border-[#32b5ff]/30' : 'bg-white/5 border-white/10'}`}>
                            {plan.icon}
                        </div>
                        {plan.highlighted && (
                            <span className="bg-[#32b5ff]/10 text-[#32b5ff] border border-[#32b5ff]/30 px-4 py-1.5 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(50,181,255,0.2)]">Recomendado</span>
                        )}
                    </div>
                    
                    <h3 className="text-4xl font-extrabold text-white mb-4">{plan.name}</h3>
                    <p className="text-gray-400 font-light text-sm mb-12 leading-relaxed">{plan.description}</p>
                    
                    <div className="mb-12">
                        <span className="text-6xl font-extrabold text-white tracking-tighter">{plan.price}</span>
                        <span className="text-gray-500 font-mono text-xs uppercase tracking-widest ml-2">/ sistema</span>
                    </div>

                    <div className="space-y-4 mb-16">
                        {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <Check className={`w-4 h-4 ${plan.highlighted ? 'text-[#32b5ff]' : 'text-gray-500'}`} />
                                <span className="text-gray-300 text-sm font-light">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                  onClick={() => scrollToSection('contacto')}
                  className={`group w-full py-5 rounded-xl font-mono font-bold text-xs tracking-[0.2em] uppercase transition-all duration-700 flex items-center justify-center gap-3 ${
                    plan.highlighted 
                        ? 'bg-white text-black hover:bg-[#32b5ff] hover:text-black hover:shadow-[0_0_30px_rgba(50,181,255,0.4)]' 
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button
            onClick={() => scrollToSection('contacto')}
            className="text-gray-500 hover:text-[#ff00ff] transition-colors text-[10px] font-mono font-bold border-b border-white/10 pb-1 uppercase tracking-[0.2em]"
          >
            Consultar para arquitecturas Enterprise a Medida
          </button>
        </motion.div>
      </div>
    </section>
  );
}