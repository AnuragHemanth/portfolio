function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b-2 border-black px-8 py-4 flex justify-between z-50">
      <h1 className="text-2xl">Hemanth</h1>
      <div className="space-x-6 text-lg">
        <a href="#about" className="hover:underline">About</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
