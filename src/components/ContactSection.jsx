import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-widest text-xs font-medium text-blue-600">Let’s connect</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Contact</h2>
          <p className="mt-3 text-gray-700">
            Open to freelance, collaborations, and full-time opportunities. Drop a message and I’ll get back soon.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="p-2 rounded-lg bg-blue-600/10 text-blue-700">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-600">hello@example.com</p>
            </div>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="p-2 rounded-lg bg-blue-600/10 text-blue-700">
              <Github className="h-5 w-5" />
            </span>
            <div>
              <p className="font-medium">GitHub</p>
              <p className="text-sm text-gray-600">github.com/yourhandle</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="p-2 rounded-lg bg-blue-600/10 text-blue-700">
              <Linkedin className="h-5 w-5" />
            </span>
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm text-gray-600">linkedin.com/in/yourhandle</p>
            </div>
          </a>
        </div>

        <p className="mt-12 text-center text-xs text-gray-500">© {new Date().getFullYear()} Flames — All rights reserved.</p>
      </div>
    </section>
  );
}
