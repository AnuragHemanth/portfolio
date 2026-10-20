import { createElement } from "react";
import { ArrowUpRight, BookOpenCheck, Code2, UsersRound } from "lucide-react";

const offerings = [
  { icon: Code2, label: "Java fundamentals & OOP" },
  { icon: BookOpenCheck, label: "DSA problem-solving practice" },
  { icon: ArrowUpRight, label: "Interview prep & coding walkthroughs" },
  { icon: UsersRound, label: "Small-group technical workshops" },
];

function Training() {
  return (
    <section id="mentoring" className="border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-2xl border border-white/[0.08] bg-[#111113] p-6 sm:p-9 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-16 lg:p-12">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#c5f467]">An additional freelance service</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Need help with Java or DSA?</h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
            I also offer focused technical mentoring and coding sessions for learners who want to
            strengthen their Java fundamentals, understand DSA, and become more confident at solving
            programming problems.
          </p>
          <a href="#contact" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#c5f467] px-4 text-sm font-semibold text-[#10110b] transition hover:bg-[#d3ff7b]">
            Discuss a mentoring session <ArrowUpRight size={15} />
          </a>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {offerings.map(({ icon: Icon, label }) => (
            <li key={label} className="flex min-h-16 items-center gap-3 rounded-lg border border-white/[0.07] bg-[#0a0a0b] px-4 py-3 text-xs leading-5 text-zinc-300">
              {createElement(Icon, { size: 16, className: "shrink-0 text-[#c5f467]" })}{label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Training;
