import { createElement } from "react";
import { ArrowUpRight, Boxes, Braces, Database, Network } from "lucide-react";

const areas = [
  {
    title: "Java development",
    icon: Braces,
    description: "Strong fundamentals for clear, maintainable application code.",
    tags: ["Core Java", "OOP", "Collections", "Exception handling"],
  },
  {
    title: "DSA & problem solving",
    icon: Network,
    description: "Practical patterns for reasoning through coding problems.",
    tags: ["Arrays & strings", "Searching & sorting", "Trees & graphs", "Recursion", "Complexity"],
  },
  {
    title: "Backend engineering",
    icon: Database,
    description: "Building blocks for useful APIs and data-backed applications.",
    tags: ["REST APIs", "Node.js", "Express.js", "MongoDB", "MySQL", "Validation"],
  },
];

function Skills() {
  return (
    <section id="skills" className="border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#c5f467]">02 / Specialization</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">The fundamentals, <span className="text-zinc-500">put to work.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-500">A focused skill set, grounded in practical work and continuous learning.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {areas.map(({ title, icon: Icon, description, tags }, index) => (
            <article key={title} className="group rounded-xl border border-white/[0.08] bg-[#111113] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c5f467]/35 sm:p-7">
              <div className="flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-lg bg-white/[0.04] text-[#c5f467] transition group-hover:bg-[#c5f467]/10">{createElement(Icon, { size: 19 })}</span>
                <span className="font-mono text-xs text-zinc-600">0{index + 1}</span>
              </div>
              <h3 className="mt-7 text-lg font-semibold text-zinc-100">{title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-500">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => <span key={tag} className="rounded-md border border-white/[0.08] px-2.5 py-1.5 font-mono text-[10px] text-zinc-400">{tag}</span>)}
              </div>
              <div className="mt-7 border-t border-white/[0.07] pt-4 font-mono text-[10px] text-zinc-600">
                <Boxes size={13} className="mr-2 inline text-[#c5f467]/70" /> LEARN · APPLY · REFINE
              </div>
            </article>
          ))}
        </div>
        <a href="#playground" className="mt-7 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-[#c5f467]">Try the DSA playground <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}

export default Skills;
