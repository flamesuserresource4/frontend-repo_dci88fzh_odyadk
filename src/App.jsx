import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-200px,rgba(139,92,246,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_110%_10%,rgba(236,72,153,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_-10%_80%,rgba(59,130,246,0.1),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />

        {/* subtle divider */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
