import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-gray-100 min-h-screen" : "bg-gray-50 text-gray-900 min-h-screen"}>
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-blue-600">Your Name</span></h2>
        <p className="text-lg md:text-xl mb-6">A passionate Web Developer & Designer</p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I'm a developer who loves building clean and modern web applications.
          Skilled in React, Tailwind, and backend frameworks. Always curious about learning new tech.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-10">Projects</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((p) => (
            <div key={p} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
              <img src={`https://via.placeholder.com/600x400?text=Project+${p}`} alt={`Project ${p}`} />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">Project {p}</h4>
                <p className="text-gray-600 dark:text-gray-300">A cool project description goes here.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">Have a project in mind? Let’s connect!</p>
        <a
          href="mailto:youremail@example.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-100 dark:bg-gray-900">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
