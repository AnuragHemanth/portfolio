import { createElement } from "react";
import { ArrowUpRight, BrainCircuit, Code2, Lightbulb, TrendingUp } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "SPEECH · LANGUAGE · AI",
    title: "Speech-to-Speech Translation",
    description: "A speech translation project exploring an end-to-end pipeline that turns spoken input into translated speech while aiming to retain speaker identity.",
    approach: "Combines voice activity detection, speech recognition, translation, speaker embeddings, and speech synthesis.",
    technologies: ["Python", "Whisper", "Transformers", "YourTTS", "Gradio"],
    icon: BrainCircuit,
    url: "https://github.com/AnuragHemanth/speech_to_speech",
  },
  {
    number: "02",
    category: "MACHINE LEARNING · TIME SERIES",
    title: "LSTM Stock Prediction",
    description: "A learning-oriented stock forecasting application that uses historical market data to explore time-series prediction.",
    approach: "Uses an LSTM model, a Flask application, and visual comparisons of actual and predicted values.",
    technologies: ["Python", "TensorFlow", "LSTM", "Flask", "yfinance"],
    icon: TrendingUp,
    url: "https://github.com/AnuragHemanth/LSTM_stock-prediction",
  },
];

function Projects() {
  return (
    <section id="projects" className="border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#c5f467]">05 / Selected work</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Projects built to <span className="text-zinc-500">learn by doing.</span></h2>
          </div>
          <a href="https://github.com/AnuragHemanth" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-[#c5f467]">
            Browse GitHub <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map(({ number, category, title, description, approach, technologies, icon: Icon, url }) => (
            <article key={number} className="group flex flex-col rounded-xl border border-white/[0.08] bg-[#111113] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#c5f467]/35 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#c5f467]">/{number}</span>
                <span className="text-right font-mono text-[9px] tracking-[0.12em] text-zinc-600 sm:text-[10px]">{category}</span>
              </div>
              <div className="mt-7 flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-[#c5f467] transition group-hover:border-[#c5f467]/25">{createElement(Icon, { size: 19 })}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-100">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
                </div>
              </div>
              <div className="mt-5 rounded-lg border border-white/[0.06] bg-[#0a0a0b] p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-600">Implementation</p>
                <p className="mt-2 text-xs leading-5 text-zinc-400">{approach}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {technologies.map((technology) => <span key={technology} className="rounded-md border border-white/[0.08] px-2.5 py-1.5 font-mono text-[10px] text-zinc-400">{technology}</span>)}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
                <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 transition hover:text-[#c5f467]">
                  <Code2 size={15} /> View source <ArrowUpRight size={13} />
                </a>
                <span className="font-mono text-[10px] text-zinc-700">GITHUB REPOSITORY</span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-[1fr_auto] md:items-center rounded-xl border border-dashed border-white/[0.13] bg-white/[0.015] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Lightbulb size={17} className="mt-0.5 shrink-0 text-[#c5f467]" />
            <div>
              <p className="text-sm font-medium text-zinc-200">On the build list: a Java REST API</p>
              <p className="mt-1 text-xs leading-5 text-zinc-500">A suggested next project—not a completed project: design an API with validation, persistence, and clear error responses.</p>
            </div>
          </div>
          <a href="#backend" className="inline-flex items-center gap-2 text-xs text-zinc-400 transition hover:text-[#c5f467]">Explore the request flow <Code2 size={14} /></a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
