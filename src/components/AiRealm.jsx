import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function AiRealm() {
  return (
    <div className="relative h-full w-full">
      <Spline
        scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Neon gradient overlay accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-400/40 via-blue-400/30 to-fuchsia-400/30 blur-3xl" />
        <div className="absolute bottom-10 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500/30 via-pink-500/30 to-indigo-500/30 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/20 bg-white/50 px-5 py-3 text-center text-sm font-medium text-gray-800 shadow-lg backdrop-blur"
        >
          AI Realm — metallic grids, pulse highlights, and precision motion.
        </motion.div>
      </div>
    </div>
  );
}
