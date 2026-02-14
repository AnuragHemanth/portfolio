function Projects() {
  return (
    <section id="projects" className="min-h-screen px-10 py-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold mb-4">
            Speech-to-Speech Translator
          </h3>
          <p className="text-gray-600 mb-4">
            End-to-end voice translation system using ASR → Translation → Voice Cloning.
          </p>
          <button className="text-indigo-600 font-semibold">
            View Project →
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold mb-4">
            LSTM Stock Predictor
          </h3>
          <p className="text-gray-600 mb-4">
            Time-series forecasting system using LSTM neural networks.
          </p>
          <button className="text-indigo-600 font-semibold">
            View Project →
          </button>
        </div>

      </div>
    </section>
  );
}

export default Projects;
