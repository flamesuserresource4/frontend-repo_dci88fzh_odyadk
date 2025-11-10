import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
        >
          Crafting Modern Digital Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
        >
          I’m a creative developer focused on elegant interfaces, smooth motion, and playful interactions that feel alive.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="pointer-events-auto rounded-full px-6 py-3 bg-white text-black font-medium hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition shadow-lg"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="pointer-events-auto rounded-full px-6 py-3 bg-white/10 text-white border border-white/20 hover:bg-white/20 transition"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left"
        >
          {[
            ['UI/UX', 'Detail-oriented design'],
            ['Animation', 'Micro-interactions'],
            ['3D', 'WebGL & Spline'],
            ['Performance', 'Fast and accessible'],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <div className="text-sm uppercase tracking-wide text-white/70">{title}</div>
              <div className="mt-1 text-white font-medium">{desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
