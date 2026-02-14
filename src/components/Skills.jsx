function Skills() {
  return (
    <section id="skills" className="min-h-screen px-10 py-24 bg-white">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-indigo-100 p-6 rounded-xl">
          🧠 Data Structures & Algorithms
        </div>

        <div className="bg-cyan-100 p-6 rounded-xl">
          ⚛️ React & Frontend
        </div>

        <div className="bg-purple-100 p-6 rounded-xl">
          🗄️ Node.js & Backend
        </div>

        <div className="bg-pink-100 p-6 rounded-xl">
          🎤 AI & Speech Processing
        </div>

      </div>
    </section>
  );
}

export default Skills;
