import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collab Board',
    description: 'A canvas for brainstorming with multiplayer cursors and presence.',
    tags: ['React', 'WebRTC', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Headless eCommerce',
    description: 'A performant storefront with server-rendered product pages.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    link: '#',
  },
  {
    title: '3D Product Showcase',
    description: 'Interactive 3D viewer embedded with Spline and custom controls.',
    tags: ['Spline', 'Three.js', 'Vite'],
    link: '#',
  },
  {
    title: 'AI Content Toolkit',
    description: 'Tools for summarization, tagging, and semantic search.',
    tags: ['FastAPI', 'Python', 'Embeddings'],
    link: '#',
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="uppercase tracking-widest text-xs font-medium text-blue-600">Selected Work</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Projects</h2>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800">
            <Code2 className="h-4 w-4" />
            Available for freelance
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-200 via-indigo-200 to-cyan-200" />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg group-hover:text-blue-700 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-700 flex-1">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-blue-600/10 text-blue-700 border border-blue-600/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
                  >
                    View project
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
