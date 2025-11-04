import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Github } from 'lucide-react';

export default function VisionaryChamber() {
  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-[#000814]">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{
        backgroundImage:
          'radial-gradient(600px 300px at 15% 20%, rgba(0,255,255,0.2), transparent), radial-gradient(800px 400px at 85% 80%, rgba(127,0,255,0.25), transparent)'
      }} />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
          >
            <p className="text-xs tracking-[0.35em] uppercase text-cyan-300">About You</p>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-white to-purple-400 text-transparent bg-clip-text">
              Nilesh Singh — Deep-Tech Visionary & Founder of NovaEra Hub
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#f5f5f5]/85">
              Building autonomous systems and sustainable futures through AI, quantum intelligence, and innovation.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["gen AI","AI Agents","Prompt Engineering","Quantum Logic","System Design"].map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-200 border border-purple-400/20">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2.5 text-sm font-medium shadow hover:opacity-90 transition">
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a href="mailto:hello@novaerahub.com" className="inline-flex items-center gap-2 rounded-lg bg-white/10 text-white px-4 py-2.5 text-sm font-medium shadow border border-white/10 hover:bg-white/15 transition">
                <Mail className="h-4 w-4" /> Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
          >
            <p className="text-xs tracking-[0.35em] uppercase text-cyan-300">Let’s connect</p>
            <div className="mt-4 grid grid-cols-1 gap-3">
              <a href="mailto:hello@novaerahub.com" className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
                <span className="p-2 rounded-lg bg-cyan-500/15 text-cyan-300"><Mail className="h-5 w-5" /></span>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-xs text-white/70">hello@novaerahub.com</p>
                </div>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
                <span className="p-2 rounded-lg bg-cyan-500/15 text-cyan-300"><Github className="h-5 w-5" /></span>
                <div>
                  <p className="font-medium text-white">GitHub</p>
                  <p className="text-xs text-white/70">github.com/nilesh-novaera</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
                <span className="p-2 rounded-lg bg-cyan-500/15 text-cyan-300"><Linkedin className="h-5 w-5" /></span>
                <div>
                  <p className="font-medium text-white">LinkedIn</p>
                  <p className="text-xs text-white/70">linkedin.com/in/nilesh-novaera</p>
                </div>
              </a>
            </div>
            <p className="mt-6 text-xs text-white/60 italic">“Creating a new era of intelligence.”</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
