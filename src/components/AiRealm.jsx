import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Novynex OS',
    subtitle:
      'An autonomous operating system that builds and runs entire companies — no code, no team, pure AI orchestration.',
  },
  {
    title: 'Autonomous AI Minds',
    subtitle:
      'Agents that think, remember, and adapt — they learn like humans through examples and feedback.',
  },
];

export default function AiRealm() {
  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-[#000814]">
      {/* Pulsing matrix background */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage:
          'radial-gradient(circle at 20% 30%, rgba(0,255,255,0.15), transparent 35%), radial-gradient(circle at 80% 70%, rgba(127,0,255,0.2), transparent 40%)',
      }} />

      {/* Glowing network using SVG */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="glowCyan" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(0,255,255,0.9)" />
              <stop offset="100%" stopColor="rgba(0,255,255,0)" />
            </radialGradient>
            <radialGradient id="glowPurple" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(127,0,255,0.9)" />
              <stop offset="100%" stopColor="rgba(127,0,255,0)" />
            </radialGradient>
          </defs>
          {[...Array(30)].map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            return (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(180,180,255,0.15)" strokeWidth="0.15" />
                <circle cx={x1} cy={y1} r="0.9" fill="url(#glowCyan)" />
                <circle cx={x2} cy={y2} r="0.9" fill="url(#glowPurple)" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Content cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)] hover:bg-white/[0.06] transition-colors"
            >
              <h3 className="font-semibold text-xl text-white">
                <span className="bg-gradient-to-r from-cyan-300 to-purple-400 text-transparent bg-clip-text">{p.title}</span>
              </h3>
              <p className="mt-3 text-sm text-[#f5f5f5]/85">{p.subtitle}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['AI', 'Agents', 'Systems', 'R&D'].map((t) => (
                  <span key={t} className="text-[10px] tracking-wide px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-200 border border-cyan-400/20">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
