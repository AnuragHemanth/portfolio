import { useEffect, useMemo, useState } from "react";
import { Check, Clipboard, RotateCcw, Search } from "lucide-react";

const values = [8, 3, 12, 5, 1, 9, 14, 6];
const sortedValues = [...values].sort((a, b) => a - b);

function createSteps(array, target, algorithm) {
  const steps = [];
  if (algorithm === "linear") {
    for (let index = 0; index < array.length; index += 1) {
      const found = array[index] === target;
      steps.push({ index, checked: [index], low: null, high: null, found, message: found ? `Found ${target} at index ${index}.` : `Compare ${array[index]} with ${target}: not a match. Move to the next element.` });
      if (found) break;
    }
    if (steps.at(-1)?.found !== true) steps.push({ index: null, checked: [], low: null, high: null, found: false, message: `${target} is not in this array. Every element was checked.` });
  } else {
    let low = 0;
    let high = array.length - 1;
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      const found = array[mid] === target;
      steps.push({
        index: mid,
        checked: [mid],
        low,
        high,
        found,
        message: found
          ? `Found ${target} at index ${mid}.`
          : array[mid] < target
            ? `${array[mid]} is less than ${target}; discard the lower half.`
            : `${array[mid]} is greater than ${target}; discard the upper half.`,
      });
      if (found) break;
      if (array[mid] < target) low = mid + 1;
      else high = mid - 1;
    }
    if (steps.at(-1)?.found !== true) steps.push({ index: null, checked: [], low, high, found: false, message: `${target} is not in this array. The search range is empty.` });
  }
  return steps;
}

const javaSnippets = {
  linear: `static int linearSearch(int[] values, int target) {
    for (int i = 0; i < values.length; i++) {
        if (values[i] == target) return i;
    }
    return -1;
}`,
  binary: `static int binarySearch(int[] values, int target) {
    int low = 0, high = values.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (values[mid] == target) return mid;
        if (values[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`,
};

function DSAPlayground() {
  const [algorithm, setAlgorithm] = useState("linear");
  const [targetInput, setTargetInput] = useState("9");
  const [run, setRun] = useState(null);
  const [stepIndex, setStepIndex] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [inputError, setInputError] = useState("");
  const [copied, setCopied] = useState(false);
  const array = algorithm === "linear" ? values : sortedValues;
  const steps = useMemo(
    () => run ? createSteps(run.array, run.target, run.algorithm) : [],
    [run],
  );
  const currentStep = stepIndex >= 0 ? steps[stepIndex] : null;

  useEffect(() => {
    if (!isRunning) return undefined;
    const timer = window.setInterval(() => {
      setStepIndex((current) => {
        if (current + 1 >= steps.length) {
          window.clearInterval(timer);
          setIsRunning(false);
          return current;
        }
        return current + 1;
      });
    }, 650);
    return () => window.clearInterval(timer);
  }, [isRunning, steps.length]);

  const startSearch = () => {
    const target = Number(targetInput);
    if (targetInput.trim() === "" || !Number.isInteger(target)) {
      setInputError("Enter a whole number to search for.");
      setRun(null);
      setIsRunning(false);
      setStepIndex(-1);
      return;
    }
    setInputError("");
    setRun({ algorithm, target, array: [...array] });
    setStepIndex(-1);
    setIsRunning(true);
  };

  const reset = () => {
    setIsRunning(false);
    setStepIndex(-1);
    setRun(null);
    setInputError("");
    setTargetInput("9");
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(javaSnippets[algorithm]);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setInputError("Clipboard access is unavailable. Select and copy the Java snippet.");
    }
  };

  const displayedArray = run?.array ?? array;
  const completed = Boolean(currentStep && !isRunning && stepIndex === steps.length - 1);

  return (
    <section id="playground" className="border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#c5f467]">03 / Interactive lab</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">A closer look at <span className="text-zinc-500">search.</span></h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500">Choose an algorithm, enter a target, and follow each comparison. This is an interactive learning demonstration.</p>
        </div>

        <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="min-w-0 rounded-xl border border-white/[0.08] bg-[#111113] p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex rounded-lg border border-white/[0.08] bg-[#0a0a0b] p-1" aria-label="Choose a search algorithm">
                {[
                  ["linear", "Linear search"],
                  ["binary", "Binary search"],
                ].map(([key, label]) => (
                  <button key={key} type="button" aria-pressed={algorithm === key} onClick={() => { setAlgorithm(key); setRun(null); setStepIndex(-1); setIsRunning(false); setInputError(""); }} className={`rounded-md px-3 py-2 text-xs transition ${algorithm === key ? "bg-white/[0.1] text-[#c5f467]" : "text-zinc-500 hover:text-zinc-200"}`}>
                    {label}
                  </button>
                ))}
              </div>
              <span className="font-mono text-[10px] text-zinc-600">{algorithm === "linear" ? "UNSORTED INPUT" : "SORTED INPUT"}</span>
            </div>

            <div className="mt-8 flex min-h-28 flex-wrap items-center justify-center gap-2 sm:gap-3" aria-label={`Array values: ${displayedArray.join(", ")}`}>
              {displayedArray.map((value, index) => {
                const isCompared = currentStep?.checked.includes(index);
                const isFound = currentStep?.found && currentStep.index === index;
                const isDiscarded = algorithm === "binary" && currentStep && !isCompared && (index < currentStep.low || index > currentStep.high);
                return (
                  <div key={`${index}-${value}`} className={`flex size-10 flex-col items-center justify-center rounded-lg border font-mono text-sm transition-all duration-300 sm:size-12 ${isFound ? "border-[#c5f467] bg-[#c5f467]/15 text-[#c5f467]" : isCompared ? "border-amber-300/70 bg-amber-300/10 text-amber-200" : isDiscarded ? "border-white/[0.04] bg-white/[0.01] text-zinc-700 opacity-50" : "border-white/[0.09] bg-[#0a0a0b] text-zinc-300"}`}>
                    <span>{value}</span><span className="text-[9px] text-zinc-600">{index}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex justify-center gap-4 font-mono text-[10px] text-zinc-600">
              <span><span className="mr-1.5 inline-block size-2 rounded-sm bg-amber-300/70" />comparison</span>
              <span><span className="mr-1.5 inline-block size-2 rounded-sm bg-[#c5f467]" />match</span>
              {algorithm === "binary" && <span><span className="mr-1.5 inline-block size-2 rounded-sm bg-zinc-700" />discarded</span>}
            </div>

            <form className="mt-8 flex flex-wrap items-end gap-3" onSubmit={(event) => { event.preventDefault(); startSearch(); }}>
              <label className="flex-1 text-xs text-zinc-400">
                Target value
                <input type="number" step="1" value={targetInput} onChange={(event) => setTargetInput(event.target.value)} className="mt-2 block h-11 w-full rounded-lg border border-white/[0.1] bg-[#0a0a0b] px-3 font-mono text-sm text-zinc-100 placeholder:text-zinc-600" aria-invalid={Boolean(inputError)} aria-describedby={inputError ? "target-error" : undefined} />
              </label>
              <button type="submit" disabled={isRunning} className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#c5f467] px-4 text-sm font-semibold text-[#10110b] transition hover:bg-[#d3ff7b] disabled:cursor-wait disabled:opacity-60"><Search size={15} /> {isRunning ? "Searching…" : "Run search"}</button>
              <button type="button" onClick={reset} className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm text-zinc-300 transition hover:border-white/25 hover:text-white"><RotateCcw size={14} /> Reset</button>
            </form>
            <p id="target-error" role={inputError ? "alert" : undefined} className={`mt-2 min-h-5 text-xs ${inputError ? "text-rose-300" : "text-transparent"}`}>{inputError || " "}</p>
            <div aria-live="polite" className="mt-3 min-h-[68px] rounded-lg border border-white/[0.07] bg-[#0a0a0b] p-4">
              {currentStep ? (
                <>
                  <p className={`text-sm ${completed && currentStep.found ? "text-[#c5f467]" : completed ? "text-zinc-300" : "text-zinc-200"}`}>{completed && currentStep.found ? <Check size={15} className="mr-1.5 inline" /> : null}{currentStep.message}</p>
                  <p className="mt-2 font-mono text-[10px] text-zinc-600">{completed ? "COMPLETE" : `STEP ${stepIndex + 1} / ${steps.length}`}</p>
                </>
              ) : <p className="text-sm text-zinc-500">Choose a target and run the search to see each step.</p>}
            </div>
            <div className="mt-4 flex flex-wrap gap-5 font-mono text-[10px] text-zinc-500">
              <span>TIME <strong className="ml-1 font-normal text-zinc-300">{algorithm === "linear" ? "O(n)" : "O(log n)"}</strong></span>
              <span>SPACE <strong className="ml-1 font-normal text-zinc-300">O(1)</strong></span>
            </div>
          </div>

          <aside className="min-w-0 rounded-xl border border-white/[0.08] bg-[#111113] p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">Java equivalent</p>
                <h3 className="mt-2 text-sm font-medium text-zinc-200">{algorithm === "linear" ? "Linear search" : "Binary search"}</h3>
              </div>
              <button type="button" onClick={copyCode} className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] px-2.5 py-2 text-[10px] text-zinc-400 transition hover:border-[#c5f467]/40 hover:text-[#c5f467]" aria-label="Copy Java code">
                {copied ? <Check size={13} /> : <Clipboard size={13} />}{copied ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="mt-5 max-w-full overflow-x-auto rounded-lg border border-white/[0.06] bg-[#0a0a0b] p-4 font-mono text-[10px] leading-6 text-zinc-300 sm:text-xs"><code>{javaSnippets[algorithm]}</code></pre>
            {algorithm === "binary" && <p className="mt-3 text-xs leading-5 text-zinc-500">Binary search needs sorted input. The visualization sorts the starting values for you.</p>}
          </aside>
        </div>
      </div>
    </section>
  );
}

export default DSAPlayground;
