import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient edges so text is legible over the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.55),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.5),transparent_60%)]" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg">
          <p className="uppercase tracking-widest text-xs font-medium text-blue-600">Interactive 3D Portfolio</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight">
            NovaEra Hub — Modern, immersive web experiences
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-700">
            Explore multiple realms with cinematic transitions and a dynamic 3D background. Crafted with performance and elegance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-4 py-2.5 text-sm font-medium shadow hover:bg-blue-700 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-4 py-2.5 text-sm font-medium shadow border border-black/10 hover:bg-gray-50 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
