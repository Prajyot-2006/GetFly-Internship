import { useState } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import ProjectList from "./pages/ProjectList"
import DPRForm from "./pages/DPRForm"
import { Toaster } from "react-hot-toast"

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      
      <HashRouter>
        
        {/* Toast notifications */}
        <Toaster position="top-center" reverseOrder={false} />

        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">

          {/* Dark mode toggle */}
          <div className="p-4 flex justify-end">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded"
            >
              {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>
          </div>

          {/* App Routes */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/dpr" element={<DPRForm />} />
          </Routes>

        </div>

      </HashRouter>

    </div>
  )
}

export default App