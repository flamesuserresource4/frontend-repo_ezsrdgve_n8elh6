import React from 'react';

const projects = [
  {
    title: 'Cinematic Product Launch',
    desc: 'Immersive 3D microsite with interactive camera paths and shader-driven effects.',
  },
  {
    title: 'AI Dashboard',
    desc: 'Insightful visualizations, ambient 3D loops, and responsive layouts for ML ops.',
  },
  {
    title: 'XR Experience',
    desc: 'Real-time scenes with fluid navigation and delightful microinteractions.',
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
        <p className="text-sm text-gray-600">Curated work highlighting motion, craft, and clarity.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md"
          >
            <div className="mb-4 h-36 w-full rounded-xl bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100" />
            <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
