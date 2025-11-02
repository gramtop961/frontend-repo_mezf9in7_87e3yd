import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <main>
        <Hero />
        <section id="about" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">About</h2>
              <p className="mt-3 text-black/70 dark:text-white/70">
                I’m Prince, a full‑stack developer focused on building polished, performant web
                applications. I enjoy partnering with teams to design robust APIs, model data
                thoughtfully, and craft accessible, responsive interfaces.
              </p>
              <p className="mt-3 text-black/70 dark:text-white/70">
                My toolkit includes React, TypeScript, Tailwind, Node/FastAPI, and cloud‑native
                deployments. I care deeply about developer experience and shipping value fast
                without compromising on quality.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4 self-start">
              {[
                { label: "Frontend", items: ["React", "Vite", "TypeScript", "Tailwind"] },
                { label: "Backend", items: ["FastAPI", "Node", "GraphQL", "REST"] },
                { label: "Data", items: ["MongoDB", "Postgres", "Prisma", "Redis"] },
                { label: "DevOps", items: ["Docker", "CI/CD", "Vercel", "AWS"] },
              ].map((group) => (
                <li key={group.label} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur p-5">
                  <p className="text-sm font-medium text-black/70 dark:text-white/70">{group.label}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((it) => (
                      <span key={it} className="text-xs px-2.5 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.06]">
                        {it}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>
      <footer className="py-10 border-t border-black/5 dark:border-white/10 text-sm text-center text-black/60 dark:text-white/60">
        © {new Date().getFullYear()} Prince. All rights reserved.
      </footer>
    </div>
  );
}
