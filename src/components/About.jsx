import { createElement } from "react";
import { ArrowUpRight, BrainCircuit, Code2, Layers3, MessageCircle } from "lucide-react";

const strengths = [
  { icon: Code2, title: "Java & OOP", text: "Building a strong foundation in Java, object-oriented design, and maintainable code." },
  { icon: BrainCircuit, title: "DSA & problem solving", text: "Learning to reason about data structures, algorithms, and the trade-offs behind a solution." },
  { icon: Layers3, title: "Backend & full stack", text: "Exploring APIs, databases, and complete applications through practical project work." },
];

function About() {
  return (
    <section id="about" className="border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#c5f467]">01 / About</p>
            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
              Engineering mindset.<br /><span className="text-zinc-500">Continuous learning.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              I enjoy understanding a problem before reaching for a solution—learning the
              fundamentals, choosing a sensible approach, then turning an idea into working
              software. I’m building my path as a software developer, with Java, DSA, and backend
              engineering at the center.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Full-stack work and AI/ML projects give me room to explore beyond that core.
              Communication and mentoring are useful supporting strengths I bring to collaborative work.
            </p>
            <a href="#projects" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#c5f467] transition hover:gap-3">
              See selected projects <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {strengths.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="rounded-xl border border-white/[0.08] bg-[#111113] p-5 transition hover:-translate-y-1 hover:border-[#c5f467]/30 sm:p-6">
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-lg border border-[#c5f467]/15 bg-[#c5f467]/[0.06] text-[#c5f467]">{createElement(Icon, { size: 18 })}</span>
                  <span className="font-mono text-[10px] text-zinc-600">0{index + 1}</span>
                </div>
                <h3 className="text-sm font-semibold text-zinc-100">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-zinc-500">{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-12 flex items-start gap-3 border-t border-white/[0.07] pt-6 text-sm text-zinc-500">
          <MessageCircle size={16} className="mt-0.5 shrink-0 text-[#c5f467]" />
          <p>AI/ML exploration and technical mentoring complement my primary focus: building software.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
