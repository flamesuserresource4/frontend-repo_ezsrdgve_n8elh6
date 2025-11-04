import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-lg">Flames Portfolio</a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-black/5 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-black/5 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#contact" aria-label="Email" className="p-2 rounded-md hover:bg-black/5 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
