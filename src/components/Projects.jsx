import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "DevHub",
    description:
      "A community platform for developers with real‑time chat, posts, and project showcases.",
    tags: ["Next.js", "FastAPI", "WebSockets", "MongoDB"],
    demo: "#",
    repo: "#",
  },
  {
    title: "TaskFlow",
    description:
      "Team task management with drag‑and‑drop boards, analytics, and role‑based access.",
    tags: ["React", "Node", "PostgreSQL", "Prisma"],
    demo: "#",
    repo: "#",
  },
  {
    title: "ShopSwift",
    description:
      "Headless e‑commerce with serverless functions, checkout flows, and admin dashboard.",
    tags: ["Remix", "Stripe", "Cloudflare", "Tailwind"],
    demo: "#",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="mt-3 text-black/70 dark:text-white/70">
            A few things I’ve built recently. Code quality, performance, and developer
            experience are my north stars.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur p-6 flex flex-col"
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-amber-400/20 border border-black/10 dark:border-white/10" />
              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70 flex-1">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
