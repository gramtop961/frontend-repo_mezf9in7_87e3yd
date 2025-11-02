import Spline from "@splinetool/react-spline";
import { ArrowRight, Code, Server, Database } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 dark:from-black/60 dark:via-black/30 dark:to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-black" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/10">
            <Code className="h-4 w-4" /> Full‑Stack Developer
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
            Hi, I’m Prince
          </h1>
          <p className="mt-4 text-lg md:text-xl text-black/70 dark:text-white/70">
            I craft modern, scalable web apps with delightful user experiences.
            I love shipping fast, clean solutions across the stack.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-600 text-white shadow hover:bg-violet-700 transition-colors"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 sm:inline-grid sm:grid-cols-3 gap-4">
            <Badge icon={<Server className="h-4 w-4" />}>APIs</Badge>
            <Badge icon={<Database className="h-4 w-4" />}>Databases</Badge>
            <Badge icon={<Code className="h-4 w-4" />}>UI Engineering</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur text-sm">
      <span className="text-violet-600">{icon}</span>
      <span>{children}</span>
    </div>
  );
}
