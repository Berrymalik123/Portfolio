import { motion } from "framer-motion";


export default function About() {
  return (
<>
<br /><br />
    <div className="about">
      <h1 className="text-5xl font-bold text-white mb-4 text-center ">About Me</h1>
    </div>
    <section className="bg-gradient-to-br from-dark-50 to-gourmet-100 py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Title Section */}
        <motion.h1
          className="text-5xl font-bold text-gray-300 mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Hi there, I'm Ameer Hamza 👋
        </motion.h1>
        <p className="text-lg text-gray-50">
          🔥 AI Chatbot & Front-End Developer & UI/UX Designer
        </p>
        <p className="text-md text-gray-50 mt-3">
          Passionate about crafting intuitive user experiences and developing AI-driven chatbots.  
          Skilled in Dialogflow CX & ES, React.js, JavaScript, Node.js, Figma, and more.
        </p>

        {/* Education Section */}
        <motion.div
          className="mt-10 text-left bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">📚 Education</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>🎓 <b> Matriculation:</b> The H.A.S Academy (2021-2022)</li>
            <li>🎓 <b> Intermediate:</b> Govt. Degree Boys College New Karachi 5L (2022-2024)</li>
            <li>📜 <b> One-year ADIT Diploma:</b> Computer Collegiate (2022-2023)</li>
            <li>🤖 <b>AI Chatbot Development:</b> Saylani Mass IT Training Program (2023-2024)</li>
          </ul>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mt-10 text-left bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">💼 Experience</h2>
          <p className="text-gray-700">
            Currently working as a UI/UX & Front-End Development Trainer at <span className="font-semibold">Computer Collegiate</span> since Dec 4, 2024.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="mt-10 text-left bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">📫 Contact</h2>
          <p className="text-gray-700">
            📧 <b> Email: </b><a href="mailto:berrymalik7210@gmail.com" className="text-blue-500 hover:text-blue-700 transition">berrymalik7210@gmail.com</a>
          </p>
          <p className="text-gray-700">
            💼 <b> LinkedIn:</b> <a href="#" className="text-blue-500 hover:text-blue-700 transition">Ameer Hamza</a>
          </p>
        </motion.div>
      </motion.div>
    </section>
    <div className="w-full shadow-lg">
    <footer className="footer items-center px-6 py-4 text-white">
      <aside className="grid-flow-col items-center">
        <p>©2025 <a className="link link-hover font-medium" href="#">Ameer Hamza</a></p>
      </aside>
      <nav className="text-base-content grid-flow-col gap-4 md:place-self-center md:justify-self-end text-white">
        
        <a className="link link-hover" href="#">Help</a>
        <a className="link link-hover" href="#">Contact</a>
        
      </nav>
    </footer>
  </div>
    </>
  );
}
