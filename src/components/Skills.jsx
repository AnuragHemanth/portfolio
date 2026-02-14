function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-10 py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-600 mb-16">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Frontend */}
          <div className="bg-indigo-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
              ⚛️ Frontend Development
            </h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>• React.js</li>
              <li>• JavaScript (ES6+)</li>
              <li>• Tailwind CSS</li>
              <li>• HTML & CSS</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-cyan-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-cyan-600 mb-6">
              🗄️ Backend Development
            </h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>• Node.js</li>
              <li>• Express.js</li>
              <li>• MongoDB</li>
              <li>• REST APIs</li>
            </ul>
          </div>

          {/* AI / ML */}
          <div className="bg-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-purple-600 mb-6">
              🎤 AI & Machine Learning
            </h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>• Python</li>
              <li>• LSTM Models</li>
              <li>• Speech-to-Speech Systems</li>
              <li>• TensorFlow / PyTorch</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-pink-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-pink-600 mb-6">
              🛠️ Tools & Platforms
            </h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>• Git & GitHub</li>
              <li>• Docker</li>
              <li>• AWS Basics</li>
              <li>• Vercel Deployment</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
