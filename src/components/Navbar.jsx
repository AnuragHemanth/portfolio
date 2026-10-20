import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Focus", href: "#skills" },
  { name: "Playground", href: "#playground" },
  { name: "Backend", href: "#backend" },
  { name: "Projects", href: "#projects" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#0a0a0b]/90 px-5 backdrop-blur-xl sm:px-8 lg:px-12">
      <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between" aria-label="Main navigation">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-2.5" aria-label="Hemanth, home">
          <span className="grid size-8 place-items-center rounded-md border border-[#c5f467]/20 font-mono text-xs font-semibold text-[#c5f467]">H.</span>
          <span className="text-sm font-semibold tracking-tight text-zinc-100">hemanth<span className="text-[#c5f467]">.</span></span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => <a key={link.name} href={link.href} className="text-xs text-zinc-500 transition hover:text-zinc-100">{link.name}</a>)}
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-xs text-zinc-500 transition hover:text-[#c5f467]">Resume</a>
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:border-[#c5f467]/40 hover:text-[#c5f467]">Let&apos;s talk <ArrowUpRight size={13} /></a>
        </div>

        <button type="button" onClick={() => setMenuOpen((open) => !open)} className="grid size-10 place-items-center rounded-lg border border-white/10 text-zinc-200 transition hover:border-[#c5f467]/40 hover:text-[#c5f467] md:hidden" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation">
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-white/[0.07] py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => <a key={link.name} href={link.href} onClick={closeMenu} className="rounded-md px-3 py-3 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-[#c5f467]">{link.name}</a>)}
            <a href="/resume.pdf" target="_blank" rel="noreferrer" onClick={closeMenu} className="rounded-md px-3 py-3 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-[#c5f467]">Resume</a>
            <a href="#contact" onClick={closeMenu} className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#c5f467] px-4 py-3 text-sm font-semibold text-[#10110b]">Let&apos;s talk <ArrowUpRight size={15} /></a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
