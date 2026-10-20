import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-5 py-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[10px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Hemanth. Built with React + Vite.</p>
        <p className="font-mono">JAVA · DSA · BACKEND</p>
        <a href="#home" className="inline-flex items-center gap-1.5 transition hover:text-[#c5f467]"><ArrowUp size={12} /> Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;
