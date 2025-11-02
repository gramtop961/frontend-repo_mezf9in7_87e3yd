import { Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-black/50 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-lg">
          <span className="inline-block h-3 w-3 rounded-sm bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400" />
          <span>Prince</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-violet-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-violet-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-violet-600 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="Email" href="mailto:hello@prince.dev" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
