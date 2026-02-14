import heroImage from "../assets/hero.svg";


function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 bg-gradient-to-br from-indigo-100 via-white to-cyan-100">

      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="text-indigo-600">AnuragHemanth</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-700">
          AI Engineer • Full Stack Developer • Problem Solver
        </h2>

        <p className="text-lg text-gray-600 max-w-xl">
          I build intelligent systems, speech AI applications, and scalable web products.
          Passionate about transforming ideas into real-world solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            🚀 View My Work
          </a>

          <a
            href="/resume.pdf"
            download
            className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-600 hover:text-white transition"
          >
            📄 Download Resume
          </a>

        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={heroImage}
          alt="Hero Illustration"
          className="w-80 md:w-96 hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
}

export default Hero;
