import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, Network, User, Rocket } from 'lucide-react';
import DomeIntro from './DomeIntro';
import AiRealm from './AiRealm';
import VisionaryChamber from './VisionaryChamber';

const scenes = [
  { id: 'genesis', label: 'Genesis Dome', icon: Home },
  { id: 'ai', label: 'AI Realm', icon: Network },
  { id: 'vision', label: 'Visionary Chamber', icon: User },
  { id: 'future', label: 'Future Vision', icon: Rocket },
];

export default function SceneManager() {
  const [active, setActive] = useState('genesis');

  const SceneComponent = useMemo(() => {
    switch (active) {
      case 'ai':
        return AiRealm;
      case 'vision':
        return VisionaryChamber;
      case 'future':
        return () => (
          <div className="relative h-[88vh] min-h-[560px] flex items-center justify-center bg-gradient-to-br from-[#000814] via-[#0a0030] to-[#180036]">
            <div className="absolute inset-0 pointer-events-none opacity-40" style={{
              backgroundImage:
                'radial-gradient(circle at 20% 30%, rgba(127,0,255,0.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,255,255,0.35), transparent 45%)',
            }} />
            <div className="relative max-w-3xl mx-auto text-center px-6">
              <p className="text-xs tracking-[0.35em] uppercase text-cyan-300">Beyond Earth</p>
              <h2 className="mt-3 text-3xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-white to-purple-400 text-transparent bg-clip-text">
                Terraforming Tomorrow
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#f5f5f5]/80">
                NovaEra Hub aims to extend life and sustainability beyond Earth — from intelligent nanobots to interplanetary ecosystems.
              </p>
            </div>
          </div>
        );
      case 'genesis':
      default:
        return DomeIntro;
    }
  }, [active]);

  return (
    <div className="relative">
      {/* Top navigation */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#000814]/70 backdrop-blur px-2 py-2 shadow-lg shadow-black/40">
          {scenes.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                active === id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Scene container with smooth transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="min-h-[88vh]"
        >
          <SceneComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
