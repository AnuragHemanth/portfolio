import heroImage from "../assets/hero.svg";
function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center px-10 bg-gradient-to-br from-indigo-100 via-white to-cyan-100">
      
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-6xl font-bold text-indigo-600 mb-6">
          Building AI Systems That Talk 
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Full Stack Developer | ML Enthusiast | Speech AI Builder
        </p>

        <a
            href="https://github.com/AnuragHemanth"
            target="_blank"
             rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
        View My Work
        </a>

      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={heroImage}
          alt="AI Illustration"
          className="w-96"
        />
      </div>
    </section>
  );
}

export default Hero;
