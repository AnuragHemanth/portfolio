function About() {
  return (
    <section id="about" className="min-h-screen px-10 py-24 bg-white">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">

        <p>
          I am an Information Science Engineering student at MIT Mysore 
          with a strong interest in building intelligent and scalable systems. 
          I enjoy solving complex problems and turning ideas into real-world applications.
        </p>

        <p>
          My primary focus areas include Artificial Intelligence, 
          Speech Processing, and Full-Stack Development. 
          I have developed an end-to-end Speech-to-Speech Translation system 
          with voice cloning, as well as an LSTM-based stock prediction model.
        </p>

        <p>
          I am passionate about understanding how systems work internally — 
          from neural networks to backend architectures — and I continuously 
          strive to improve my technical and problem-solving skills.
        </p>

        <div className="grid md:grid-cols-2 gap-6 pt-6">

          <div className="bg-indigo-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-indigo-600 mb-2">
              🎯 Career Goal
            </h3>
            <p>
              To work in a product-based company where I can build impactful,
              scalable, and intelligent systems.
            </p>
          </div>

          <div className="bg-cyan-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-cyan-600 mb-2">
              🚀 Current Focus
            </h3>
            <p>
              Improving system design skills, mastering DSA,
              and building AI-powered applications.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
