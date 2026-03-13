import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Login from "./pages/Login"
import ProjectList from "./pages/ProjectList"
import DPRForm from "./pages/DPRForm"
import { Toaster } from "react-hot-toast"

function App() {

const [darkMode,setDarkMode] = useState(false)

return (

<div className={darkMode ? "dark" : ""}>

<BrowserRouter>

<Toaster position="top-center" reverseOrder={false} />

<div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">

<div className="p-4 flex justify-end">

<button
onClick={()=>setDarkMode(!darkMode)}
className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded"
>
{darkMode ? "☀ Light" : "🌙 Dark"}
</button>

</div>

<Routes>

<Route path="/" element={<Login />} />

<Route path="/projects" element={<ProjectList />} />

<Route path="/dpr" element={<DPRForm />} />

</Routes>

</div>

</BrowserRouter>

</div>

)
}

export default App