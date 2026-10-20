import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ArrowUpRight, Code2, LoaderCircle, Mail, Send } from "lucide-react";
import profilePhoto from "../assets/Hemanthaaaa.jpg";

function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const sendEmail = async (event) => {
    event.preventDefault();
    if (!form.current) {
      setStatus({ type: "error", message: "The message form is unavailable. Please email me directly instead." });
      return;
    }

    setStatus({ type: "sending", message: "Sending your message…" });
    try {
      await emailjs.sendForm(
        "service_m7ahmfk",
        "template_9k8ja4s",
        form.current,
        "OIBocAAZWX9hhAvDI",
      );
      form.current.reset();
      setStatus({ type: "success", message: "Your message was sent. Thanks for reaching out!" });
    } catch {
      setStatus({
        type: "error",
        message: "We couldn’t send your message. Please try again or email me directly.",
      });
    }
  };

  return (
    <section id="contact" className="border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <div className="flex items-start gap-5 sm:gap-6">
            <img
              src={profilePhoto}
              alt="Hemanth"
              className="size-16 shrink-0 rounded-full border border-[#c5f467]/30 object-cover object-center sm:size-20"
              loading="lazy"
            />
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#c5f467]">07 / Get in touch</p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Have a software problem worth solving?</h2>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
            I’m open to software engineering opportunities, backend projects, and occasional Java or DSA mentoring.
            Send a message using the form and I’ll get back to you.
          </p>
          <a
            href="mailto:hemantham015@gmail.com"
            className="mt-6 inline-flex items-center gap-2 text-xs text-zinc-500 transition hover:text-[#c5f467]"
          >
            <Mail size={14} /> Or email me at hemantham015@gmail.com
          </a>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="rounded-xl border border-white/[0.08] bg-[#111113] p-5 sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs text-zinc-400">
              Your name
              <input
                type="text"
                name="user_name"
                autoComplete="name"
                required
                maxLength={100}
                className="mt-2 block h-11 w-full rounded-lg border border-white/[0.1] bg-[#0a0a0b] px-3 text-sm text-zinc-100 placeholder:text-zinc-600"
                placeholder="Name"
              />
            </label>
            <label className="text-xs text-zinc-400">
              Your email
              <input
                type="email"
                name="user_email"
                autoComplete="email"
                required
                maxLength={254}
                className="mt-2 block h-11 w-full rounded-lg border border-white/[0.1] bg-[#0a0a0b] px-3 text-sm text-zinc-100 placeholder:text-zinc-600"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-5 block text-xs text-zinc-400">
            Your message
            <textarea
              name="message"
              required
              minLength={5}
              maxLength={5000}
              rows={5}
              className="mt-2 block w-full resize-y rounded-lg border border-white/[0.1] bg-[#0a0a0b] px-3 py-3 text-sm leading-6 text-zinc-100 placeholder:text-zinc-600"
              placeholder="What would you like to discuss?"
            />
          </label>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p
              role="status"
              aria-live="polite"
              className={`min-h-5 text-xs ${status.type === "error" ? "text-rose-300" : status.type === "success" ? "text-[#c5f467]" : "text-zinc-500"}`}
            >
              {status.message || "Your message will be sent to Hemanth."}
            </p>
            <button
              type="submit"
              disabled={status.type === "sending"}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#c5f467] px-5 text-sm font-semibold text-[#10110b] transition hover:bg-[#d3ff7b] disabled:cursor-wait disabled:opacity-60"
            >
              {status.type === "sending" ? <LoaderCircle size={16} className="animate-spin" /> : <Send size={15} />}
              {status.type === "sending" ? "Sending…" : "Send message"}
              {status.type !== "sending" && <ArrowUpRight size={14} />}
            </button>
          </div>
        </form>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/[0.07] pt-5">
        <a
          href="https://github.com/AnuragHemanth"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs text-zinc-500 transition hover:text-[#c5f467]"
        >
          <Code2 size={14} /> Connect on GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
