import { createElement } from "react";
import { useState } from "react";
import { ArrowDown, ArrowRight, Check, CircleDot, Database, FileCheck2, GitBranch, Globe2, Server } from "lucide-react";

const stages = [
  { title: "Client", icon: Globe2, does: "Creates a request with a method, URL, and any needed data.", why: "A predictable contract helps applications communicate.", example: "GET /api/solutions/42" },
  { title: "API endpoint", icon: CircleDot, does: "Matches the request to a route and HTTP method.", why: "Clear routes make an API easier to navigate and maintain.", example: "router.get('/solutions/:id', handler)" },
  { title: "Validation", icon: FileCheck2, does: "Checks that parameters and request data have the expected shape.", why: "Invalid input should be rejected before it reaches business logic.", example: "if (!Number.isInteger(id)) return 400" },
  { title: "Business logic", icon: GitBranch, does: "Applies the application rules to the validated request.", why: "Keeping rules out of transport and persistence code makes them easier to test.", example: "const result = await getSolution(id)" },
  { title: "Database", icon: Database, does: "Reads or changes persistent data through a database layer.", why: "A persistence boundary keeps storage concerns explicit.", example: "repository.findById(id)" },
  { title: "Response", icon: Server, does: "Returns a status code and a predictable response body.", why: "Clients need a clear result to handle success and errors.", example: "res.status(200).json({ data: result })" },
];

const statuses = [
  ["200", "OK", "Request succeeded."],
  ["400", "Bad request", "Request input is invalid."],
  ["401", "Unauthorized", "Authentication is required or invalid."],
  ["500", "Server error", "An unexpected failure occurred."],
];

function BackendSystems() {
  const [selected, setSelected] = useState(0);
  const active = stages[selected];

  return (
    <section id="backend" className="border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#c5f467]">04 / Backend engineering</p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">How I Think About <span className="text-zinc-500">Backend Systems</span></h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">A clear request path makes software easier to understand, test, and change. Select a stage to explore its role.</p>
        </div>

        <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="min-w-0 rounded-xl border border-white/[0.08] bg-[#111113] p-5 sm:p-7">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {stages.map(({ title }, index) => (
                <button key={title} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)} className={`flex min-h-[76px] items-center gap-3 rounded-lg border p-3 text-left transition ${selected === index ? "border-[#c5f467]/40 bg-[#c5f467]/[0.06] text-[#c5f467]" : "border-white/[0.07] bg-[#0a0a0b] text-zinc-400 hover:border-white/20 hover:text-zinc-200"}`}>
                  {createElement(stages[index].icon, { size: 17, className: "shrink-0" })}
                  <span className="min-w-0"><span className="block text-xs font-medium">{title}</span><span className="mt-1 block font-mono text-[9px] text-zinc-600">STEP 0{index + 1}</span></span>
                </button>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 font-mono text-[9px] text-zinc-700 sm:text-[10px]" aria-hidden="true">
              {stages.map(({ title }, index) => (
                <span key={title} className="inline-flex items-center gap-1.5">
                  <span className={selected === index ? "text-[#c5f467]" : ""}>{title.toUpperCase()}</span>
                  {index < stages.length - 1 && <ArrowRight size={12} />}
                </span>
              ))}
            </div>
            <div aria-live="polite" className="mt-6 rounded-lg border border-white/[0.07] bg-[#0a0a0b] p-5">
              <div className="flex items-center gap-2 text-xs text-[#c5f467]">{createElement(active.icon, { size: 15 })}<span className="font-medium">{active.title}</span></div>
              <p className="mt-4 text-sm leading-6 text-zinc-300">{active.does}</p>
              <p className="mt-3 text-xs leading-5 text-zinc-500"><span className="text-zinc-300">Why it matters: </span>{active.why}</p>
              <code className="mt-4 block overflow-x-auto rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-2.5 font-mono text-[10px] text-amber-200 sm:text-xs">{active.example}</code>
            </div>
          </div>

          <div className="min-w-0 rounded-xl border border-white/[0.08] bg-[#111113] p-5 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">Example response</p>
            <pre className="mt-4 max-w-full overflow-x-auto rounded-lg border border-white/[0.06] bg-[#0a0a0b] p-4 font-mono text-xs leading-6 text-zinc-300"><code>{`{
  "data": {
    "id": 42,
    "title": "Search fundamentals"
  }
}`}</code></pre>
            <div className="mt-6 space-y-3">
              {statuses.map(([code, label, detail]) => (
                <div key={code} className="flex items-start gap-3 border-b border-white/[0.06] pb-3 last:border-0 last:pb-0">
                  <span className={`min-w-9 font-mono text-xs ${code === "200" ? "text-[#c5f467]" : "text-zinc-300"}`}>{code}</span>
                  <div><p className="text-xs font-medium text-zinc-300">{label}</p><p className="mt-1 text-[10px] leading-5 text-zinc-500">{detail}</p></div>
                  {code === "200" && <Check size={13} className="ml-auto mt-0.5 text-[#c5f467]" />}
                </div>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 border-t border-white/[0.07] pt-4 text-[10px] text-zinc-600"><ArrowDown size={13} /> UI-only learning demo · no production backend</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BackendSystems;
