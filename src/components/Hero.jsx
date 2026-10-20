import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Mail,
  Radio,
} from "lucide-react";
import profilePhoto from "../assets/Hemanthaaaa.jpg";

const codeLines = [
  <><span className="text-purple-300">public class</span> <span className="text-sky-300">Solution</span> {"{"}</>,
  <><span className="pl-5 text-purple-300">public static int</span> <span className="text-amber-200">binarySearch</span>(<span className="text-sky-200">int</span>[] values, <span className="text-sky-200">int</span> target) {"{"}</>,
  <span className="pl-10"><span className="text-sky-200">int</span> low = <span className="text-orange-300">0</span>, high = values.length - <span className="text-orange-300">1</span>;</span>,
  <><span className="pl-10 text-purple-300">while</span> (low &lt;= high) {"{"}</>,
  <span className="pl-14"><span className="text-sky-200">int</span> mid = low + (high - low) / <span className="text-orange-300">2</span>;</span>,
  <><span className="pl-14 text-purple-300">if</span> (values[mid] == target) <span className="text-purple-300">return</span> mid;</>,
  <><span className="pl-14 text-purple-300">if</span> (values[mid] &lt; target) low = mid + <span className="text-orange-300">1</span>;</>,
  <><span className="pl-14 text-purple-300">else</span> high = mid - <span className="text-orange-300">1</span>;</>,
  <span className="pl-10">{"}"}</span>,
  <><span className="pl-10 text-purple-300">return</span> -<span className="text-orange-300">1</span>;</>,
  <span className="pl-5">{"}"}</span>,
  <>{"}"}</>,
];

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div className="min-w-0">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-zinc-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#c5f467] opacity-50 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-[#c5f467]" />
            </span>
            Open to software engineering opportunities
          </div>

          <p className="mb-5 font-mono text-sm text-[#c5f467]">
            SOFTWARE DEVELOPER <span className="text-zinc-600">/</span> JAVA &amp; BACKEND
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[3.65rem]">
            I build reliable software with{" "}
            <span className="text-[#c5f467]">Java, DSA &amp; Backend Engineering.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            I enjoy breaking down problems, writing clean code, and building practical
            applications—from core Java and algorithms to APIs and full-stack projects.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#c5f467] px-5 font-semibold text-[#10110b] transition hover:-translate-y-0.5 hover:bg-[#d3ff7b]"
            >
              Explore my work <ArrowRight size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/15 px-5 font-medium text-zinc-200 transition hover:border-[#c5f467]/60 hover:text-[#c5f467]"
            >
              Let&apos;s connect <Mail size={16} />
            </a>
          </div>
          <a
            href="#mentoring"
            className="mt-5 inline-flex items-center gap-1.5 text-sm text-zinc-500 underline decoration-zinc-700 underline-offset-4 transition hover:text-[#c5f467]"
          >
            Java &amp; DSA mentoring <ArrowUpRight size={13} />
          </a>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-zinc-400">
            <a
              href="https://github.com/AnuragHemanth"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-[#c5f467]"
            >
              <Code2 size={16} /> GitHub
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-[#c5f467]"
            >
              <Code2 size={16} /> Resume
            </a>
            <a href="#about" className="ml-auto hidden items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-600 transition hover:text-zinc-300 sm:inline-flex">
              Scroll to explore <ArrowDown size={14} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto grid w-full min-w-0 max-w-[680px] grid-cols-1 items-center gap-4 sm:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto aspect-[4/4.5] w-full max-w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#111113] shadow-2xl shadow-black/30 sm:aspect-[3/4] sm:max-w-none">
            <img
              src={profilePhoto}
              alt="Hemanth, software developer"
              className="h-full w-full object-cover object-center"
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a0a0b]/95 via-[#0a0a0b]/50 to-transparent px-4 pb-4 pt-14">
              <p className="text-sm font-semibold text-white">Hemanth</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#c5f467]">Software developer</p>
            </div>
          </div>

          <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#111113] shadow-2xl shadow-black/30">
            <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3.5">
              <span className="size-2.5 rounded-full bg-[#f87171]/80" />
              <span className="size-2.5 rounded-full bg-[#facc15]/80" />
              <span className="size-2.5 rounded-full bg-[#86efac]/80" />
              <span className="ml-3 font-mono text-xs text-zinc-500">Solution.java</span>
              <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] text-zinc-500">
                <Radio size={12} className="text-[#c5f467]" /> READY
              </span>
            </div>

            <div className="overflow-x-auto px-4 py-5 font-mono text-[11px] leading-[1.95rem] sm:px-6 sm:text-[13px]">
              {codeLines.map((line, index) => (
                <div key={index} className="flex min-w-max">
                  <span className="mr-5 w-5 select-none text-right text-zinc-700">{index + 1}</span>
                  <code>{line}</code>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 border-t border-white/[0.07]">
              {[
                ["01", "JAVA", "Core language"],
                ["02", "DSA", "Problem solving"],
                ["03", "BACKEND", "APIs & data"],
              ].map(([number, label, detail]) => (
                <div key={label} className="border-r border-white/[0.07] px-3 py-4 last:border-0 sm:px-5">
                  <p className="font-mono text-[10px] text-zinc-600">{number}</p>
                  <p className="mt-1.5 text-xs font-semibold tracking-wide text-zinc-200">{label}</p>
                  <p className="mt-1 text-[10px] text-zinc-500 sm:text-xs">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#111113] px-4 py-3">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#c5f467]/10 text-[#c5f467]">
              <Code2 size={16} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-zinc-200">A request, traced step by step</p>
              <p className="mt-1 truncate font-mono text-[10px] text-zinc-500">GET /api/solutions → 200 OK</p>
            </div>
            <span className="font-mono text-[10px] text-[#c5f467]">01—06</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
