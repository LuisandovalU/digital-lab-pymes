import { Check, Zap, Building2, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';
import { motion } from 'motion/react';

export function Pricing() {
  const plans = [
    {
      name: 'Emprende',
      icon: <Zap className="w-5 h-5 text-primary" />,
      description: 'La base digital perfecta para negocios que están iniciando su expansión.',
      price: '€1,500',
      features: [
        'Landing Page Profesional',
        'Optimización Móvil Total',
        'SEO Local Configurado',
        'Formularios de Contacto',
        'Soporte Post-Lanzamiento',
      ],
      highlighted: false,
      cta: 'Iniciar Fase 1',
    },
    {
      name: 'Escala',
      icon: <Building2 className="w-5 h-5 text-white" />,
      description: 'Para empresas en desarrollo que necesitan una infraestructura robusta.',
      price: '€4,500',
      features: [
        'Ecosistema Multi-Página',
        'Panel de Gestión (CMS)',
        'E-commerce / Catálogo Pro',
        'Automatización de Mensajes',
        'Soporte Técnico Anual',
        'Optimización de Conversión',
      ],
      highlighted: true,
      cta: 'Agendar Crecimiento',
    },
  ];

  return (
    <section id="precios" className="relative py-40 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500">Inversión Inteligente</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold text-white mb-10 leading-[0.9] tracking-tight"
          >
            Invierte en <br /><span className="italic text-primary font-title font-medium">Tu Crecimiento</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Soluciones escalables diseñadas para ajustarse a la realidad de tu pyme y potenciar tus resultados.
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
              className={`relative p-1 rounded-[3rem] ${plan.highlighted ? 'bg-gradient-to-b from-primary/50 to-transparent' : 'bg-white/5'}`}
            >
              <div className="h-full bg-[#080808] rounded-[2.9rem] p-12 flex flex-col justify-between border border-transparent">
                <div>
                    <div className="flex justify-between items-start mb-12">
                        <div className={`p-4 rounded-2xl border ${plan.highlighted ? 'bg-primary border-primary/50' : 'bg-white/5 border-white/10'}`}>
                            {plan.icon}
                        </div>
                        {plan.highlighted && (
                            <span className="bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase">Popular</span>
                        )}
                    </div>
                    
                    <h3 className="text-4xl font-bold text-white mb-4 font-title">{plan.name}</h3>
                    <p className="text-gray-500 font-light text-sm mb-12 leading-relaxed">{plan.description}</p>
                    
                    <div className="mb-12">
                        <span className="text-6xl font-bold text-white tracking-tighter">{plan.price}</span>
                        <span className="text-gray-500 text-sm italic ml-2">/ proyecto</span>
                    </div>

                    <div className="space-y-4 mb-16">
                        {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <Check className={`w-4 h-4 ${plan.highlighted ? 'text-primary' : 'text-gray-600'}`} />
                                <span className="text-gray-400 text-sm font-light">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                  onClick={() => scrollToSection('contacto')}
                  className={`group w-full py-5 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all duration-700 flex items-center justify-center gap-3 ${
                    plan.highlighted 
                        ? 'bg-white text-black hover:bg-primary hover:text-white' 
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
            className="text-gray-500 hover:text-primary transition-colors text-xs font-bold border-b border-white/5 pb-1 uppercase tracking-widest"
          >
            Consultar para arquitecturas Enterprise
          </button>
        </motion.div>
      </div>
    </section>
  );
}