import { Mail, MapPin } from "lucide-react";
import { useCallback } from "react";

export default function Contact() {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "Someone"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:hello@prince.dev?subject=${subject}&body=${body}`;
  }, []);

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Let’s build something great</h2>
            <p className="mt-3 text-black/70 dark:text-white/70">
              I’m open to freelance work, full‑time roles, and collaborations. Share a few
              details about your idea and I’ll get back to you.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@prince.dev" className="hover:underline">hello@prince.dev</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Remote • Open to opportunities
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur p-6">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input name="name" type="text" className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.06] px-3 py-2 outline-none focus:ring-2 ring-violet-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input name="email" type="email" className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.06] px-3 py-2 outline-none focus:ring-2 ring-violet-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea name="message" rows={4} className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.06] px-3 py-2 outline-none focus:ring-2 ring-violet-500" placeholder="Tell me about your project" />
              </div>
              <button type="submit" className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-violet-600 text-white shadow hover:bg-violet-700 transition-colors">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
