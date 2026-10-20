
import {
  FileText,
  Download,
  ExternalLink,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

function Resume() {
  return (
    <section
      id="resume"
      className="border-t border-gray-800 bg-[#0a0a0b] px-6 py-24 text-white md:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-[#111114] p-8 text-center sm:p-12 md:p-16">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime-400/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-emerald-400/5 blur-3xl" />

          <div className="relative">
            {/* Icon */}
            <div className="mx-auto mb-7 grid h-16 w-16 place-items-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-400">
              <FileText size={30} strokeWidth={1.5} />
            </div>

            {/* Heading */}
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-lime-400">
              Professional profile
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              My <span className="text-gray-500">Resume.</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400">
              Explore my technical skills, software development projects,
              education, and experience. My focus is on Java development,
              problem-solving, and building practical applications with
              modern technologies.
            </p>

            {/* Highlights */}
            <div className="my-9 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-[#19191c] px-4 py-2 text-xs text-gray-300">
                <Code2 size={15} className="text-lime-400" />
                Java & DSA
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-[#19191c] px-4 py-2 text-xs text-gray-300">
                <FileText size={15} className="text-lime-400" />
                Full-Stack Projects
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-[#19191c] px-4 py-2 text-xs text-gray-300">
                <BriefcaseBusiness size={15} className="text-lime-400" />
                Technical Experience
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-7 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-lime-300"
              >
                <ExternalLink size={18} />
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download="Hemanth-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:border-lime-400 hover:text-lime-400"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <p className="mt-6 text-xs text-gray-500">
              Java Development · Software Engineering · Full-Stack Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
