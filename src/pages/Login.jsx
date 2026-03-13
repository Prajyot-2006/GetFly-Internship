import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

  // Set browser tab title
  useEffect(() => {
    document.title = "Getfly Construction DPR – Login"
  }, [])

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if(email === "test@test.com" && password === "123456"){
      navigate("/projects")
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 overflow-hidden p-4">

      {/* Logo / App Name */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Getfly Construction Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Manage your projects & submit daily progress reports easily</p>
      </div>

      {/* Login Form */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Login
        </h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-3 rounded bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-300"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-3 rounded bg-white dark:bg-gray-700 text-black dark:text-white border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-300"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        © 2026 Getfly. All rights reserved.
      </footer>

    </div>
  )
}

export default Login