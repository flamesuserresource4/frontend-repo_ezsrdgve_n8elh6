import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DomeIntro from './DomeIntro.jsx';
import AiRealm from './AiRealm.jsx';
import VisionaryChamber from './VisionaryChamber.jsx';

const tabs = [
  { key: 'dome', label: 'Dome Intro' },
  { key: 'ai', label: 'AI Realm' },
  { key: 'vision', label: 'Visionary Chamber' },
];

export default function SceneManager() {
  const [active, setActive] = useState('dome');

  return (
    <section id="scenes" className="relative w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Realms</h2>
          <div className="flex rounded-xl border border-gray-200 bg-white/70 p-1 shadow-sm backdrop-blur">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === t.key ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {t.label}
                {active === t.key && (
                  <motion.span
                    layoutId="pill"
                    className="absolute inset-0 -z-0 rounded-lg bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10"> </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-[80vh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {active === 'dome' && (
            <motion.div
              key="dome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <DomeIntro />
            </motion.div>
          )}
          {active === 'ai' && (
            <motion.div
              key="ai"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <AiRealm />
            </motion.div>
          )}
          {active === 'vision' && (
            <motion.div
              key="vision"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <VisionaryChamber />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
