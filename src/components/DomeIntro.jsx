import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function DomeIntro() {
  return (
    <div className="relative h-full w-full">
      <Spline
        scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Overlay content */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl px-6 text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            NovaEra Hub
          </h1>
          <p className="mt-4 text-base text-gray-700 sm:text-lg">
            Dynamic worlds, cinematic motion, and immersive 3D crafted for modern brands.
          </p>
          <div className="pointer-events-auto mt-6 flex items-center justify-center gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-gray-300 bg-white/70 px-5 py-2.5 text-sm font-semibold text-gray-900 backdrop-blur transition hover:bg-white"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
