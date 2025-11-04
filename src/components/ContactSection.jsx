import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-sm backdrop-blur">
        <h2 className="text-2xl font-bold text-gray-900">Let’s Build Something</h2>
        <p className="mt-2 max-w-2xl text-sm text-gray-700">
          Share your vision. I’ll translate it into a cinematic, interactive experience with performance and polish.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 grid gap-4 sm:grid-cols-2"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border border-gray-300 bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-gray-300 bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
          />
          <textarea
            placeholder="Project details"
            rows={4}
            className="sm:col-span-2 w-full rounded-xl border border-gray-300 bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
          />
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
