import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative py-16 bg-[#0B0B10] border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white">Let’s build something great</h3>
            <p className="mt-2 text-white/70">I’m open for freelance work, collaborations, or just a friendly chat.</p>
            <a
              href="mailto:hello@example.com"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-medium hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition shadow-lg"
            >
              <Mail className="h-4 w-4" />
              hello@example.com
            </a>
          </div>

          <div className="md:justify-self-end">
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:hello@example.com" className="p-2 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
