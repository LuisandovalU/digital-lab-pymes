import { Linkedin, Twitter, Instagram, Github, Terminal, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { scrollToSection } from '../utils/scroll';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "525613270003";

  return (
    <footer id="contacto" className="relative bg-[#000000] pt-40 overflow-hidden">
      {/* High-Impact CTA Section */}
      <div className="max-w-7xl mx-auto px-6 mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group rounded-xl glass-strong border-glow p-12 md:p-24 overflow-hidden text-center transition-all duration-700"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-mono tracking-[0.4em] uppercase text-gray-500 mb-10 block"
            >
              Inicia tu Transformación
            </motion.span>
            <h2 className="text-5xl md:text-8xl font-bold mb-14 leading-[0.9] tracking-tighter text-white">
              Diseñamos lo que <br /><span className="text-gradient-laser font-extrabold pb-2 inline-block">Sigue</span>
            </h2>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-md font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Iniciar Conversación
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
          
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#32b5ff]/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff00ff]/10 blur-[120px] rounded-full pointer-events-none" />
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 lg:gap-8 border-t border-white/10 pt-24">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-10 h-10 border border-white/20 glass flex items-center justify-center text-white rounded-md transition-all duration-500">
                <Terminal className="w-5 h-5 text-[#32b5ff]" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Digital<span className="text-gray-400 font-light">Lab</span>
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-sm font-light">
                Agencia de desarrollo tecnológico enfocada en la creación de aplicaciones web escalables y lógica de negocio.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram, Github].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 rounded-md border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.2em] font-mono opacity-80">Agencia</h3>
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
            <h3 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.2em] font-mono opacity-80">Comunidad</h3>
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
            <h3 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.2em] font-mono opacity-80">Contacto</h3>
            <div className="space-y-6">
              <a href="mailto:hola@digitallab.agency" className="block text-xl font-medium text-white hover:text-[#32b5ff] transition-colors duration-300 break-all">
                hola@digitallab.agency
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="block text-xl font-medium text-white hover:text-[#ff00ff] transition-colors duration-300">
                +52 56 1327 0003
              </a>
              <div className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.2em] mt-8 block">
                Deploying solutions <br />
                globally.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-40 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.2em]">
            © {currentYear} DigitalLab. All Rights Reserved.
          </p>
          <div className="flex gap-8 items-center">
            <span className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.2em] cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <div className="flex gap-4 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#32b5ff] animate-pulse" />
                <span className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.2em]">Sistemas Operativos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing for mobile floating nav */}
      <div className="md:hidden h-28" />
    </footer>
  );
}