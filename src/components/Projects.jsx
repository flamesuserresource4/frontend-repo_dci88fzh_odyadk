import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const items = [
  {
    title: 'Interactive Dashboard',
    desc: 'A data-rich dashboard with fluid motion and delightful micro-interactions.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: '3D Product Teaser',
    desc: 'Real-time 3D experience built with Spline and WebGL for product storytelling.',
    tags: ['Spline', 'Three.js'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Portfolio Generator',
    desc: 'A generator that builds beautiful portfolios from a single config file.',
    tags: ['Next.js', 'Design Systems'],
    link: '#',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black to-[#0B0B10]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 right-0 h-64 w-64 rounded-full blur-3xl bg-violet-500/20" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full blur-3xl bg-fuchsia-500/20" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          Selected Work
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-white/70 group-hover:text-white transition" />
                </div>
                <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
