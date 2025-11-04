import React from 'react';
import { Rocket, Sparkles, LayoutGrid, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/70 px-4 py-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <a href="#top" className="flex items-center gap-2 font-semibold text-gray-900">
            <Rocket className="h-5 w-5 text-blue-600" />
            NovaEra Hub
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#scenes" className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              <Sparkles className="h-4 w-4 text-pink-500" /> Scenes
            </a>
            <a href="#projects" className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              <LayoutGrid className="h-4 w-4 text-blue-600" /> Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              <Mail className="h-4 w-4 text-emerald-600" /> Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
