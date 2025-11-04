import React from 'react';
import { motion } from 'framer-motion';

export default function VisionaryChamber() {
  return (
    <div className="relative h-full w-full bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Animated fluid gradient ribbons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          className="absolute -top-20 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-400/40 via-pink-400/30 to-white/0 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 left-10 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-violet-400/30 via-blue-400/30 to-cyan-400/30 blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 70, ease: 'linear', repeat: Infinity }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Visionary Chamber</h3>
          <p className="mt-3 text-gray-700">
            A serene, light-drenched canvas for concept exploration and future narratives.
          </p>
        </div>
      </div>
    </div>
  );
}
