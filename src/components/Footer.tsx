import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, Rocket, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { scrollToSection } from '../utils/scroll';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="relative bg-[#050505] pt-40 overflow-hidden">
      {/* High-Impact CTA Section */}
      <div className="max-w-7xl mx-auto px-6 mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group rounded-[3.5rem] bg-white text-black p-12 md:p-24 overflow-hidden text-center transition-all duration-700 hover:shadow-[0_0_80px_rgba(255,255,255,0.1)]"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-bold tracking-[0.4em] uppercase text-black/50 mb-10 block"
            >
              ¿Próximo Gran Proyecto?
            </motion.span>
            <h2 className="text-5xl md:text-8xl font-bold mb-14 font-title leading-[0.85] tracking-tight">
              Diseñamos lo que <br /><span className="italic text-primary">Sigue</span>
            </h2>
            <button
              onClick={() => scrollToSection('contacto')}
              className="group relative inline-flex items-center gap-6 bg-black text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-700 hover:bg-primary"
            >
              Iniciar Conversación
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
            </button>
          </div>
          
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full" />
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 lg:gap-8 border-t border-white/5 pt-24">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-xl shadow-primary/20 group-hover:rotate-12 transition-all duration-500">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-white font-title tracking-tight">
                Digital<span className="text-primary italic">Lab</span>
              </span>
            </div>
            <p className="text-gray-500 text-xl leading-relaxed mb-12 max-w-sm font-light">
                Agencia boutique de diseño y tecnología escalando visiones globales.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram, Github].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-gray-600 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-500"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.3em]">Agencia</h3>
            <ul className="space-y-4">
              {['Servicios', 'Filosofía', 'Portafolio', 'Precios'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-500 hover:text-white transition-colors duration-300 font-light text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.3em]">Comunidad</h3>
            <ul className="space-y-4">
              {['Blog', 'Open Source', 'Laboratorio', 'Newsletter'].map((item) => (
                <li key={item}>
                  <button className="text-gray-500 hover:text-white transition-colors duration-300 font-light text-sm text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.3em]">Hablemos</h3>
            <div className="space-y-8">
              <a href="mailto:hola@digitallab.agency" className="block text-2xl font-medium text-white hover:text-primary transition-colors duration-300 break-all font-title">
                hola@digitallab.agency
              </a>
              <div className="text-gray-500 text-sm font-light leading-relaxed uppercase tracking-widest opacity-60">
                Construyendo desde la <br />
                web para el mundo.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-700 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {currentYear} DigitalLab. All Rights Reserved.
          </p>
          <div className="flex gap-8 items-center">
            <span className="text-gray-700 text-[10px] font-bold uppercase tracking-[0.2em] cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <div className="flex gap-4 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-gray-700 text-[10px] font-bold uppercase tracking-[0.2em]">Sistemas Operativos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing for mobile floating nav */}
      <div className="md:hidden h-28" />
    </footer>
  );
}