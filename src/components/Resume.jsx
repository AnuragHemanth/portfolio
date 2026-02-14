function Resume() {
  return (
    <section
      id="resume"
      className="px-6 md:px-10 py-24 bg-gradient-to-r from-indigo-50 via-white to-cyan-50"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-6">
          My Resume
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Download my resume to explore my technical skills, 
          project experience, and academic background. 
          I am passionate about building intelligent systems 
          and scalable applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">

          {/* View Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition text-lg"
          >
            👀 View Resume
          </a>

          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-600 hover:text-white transition text-lg"
          >
            📄 Download Resume
          </a>

        </div>
      </div>
    </section>
  );
}

export default Resume;
