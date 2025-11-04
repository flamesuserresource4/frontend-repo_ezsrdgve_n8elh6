import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function DomeIntro() {
  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-[#000814]">
      {/* 3D animation scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Neon gradients overlay for atmosphere (does not block interactions) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(600px 300px at 10% 10%, rgba(0,255,255,0.25), transparent), radial-gradient(800px 400px at 90% 80%, rgba(127,0,255,0.25), transparent)'
        }}
      />

      {/* Intro copy */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-cyan-300">Welcome to NovaEra Hub</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-cyan-300 via-white to-purple-400 text-transparent bg-clip-text">
            The living ecosystem of tomorrow’s innovations
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#f5f5f5]/85">
            I’m Nilesh Singh, Founder and Deep-Tech Visionary, building autonomous systems that think, evolve, and sustain the planet.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {['AI', 'Quantum', 'Sustainability', 'Vision'].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
