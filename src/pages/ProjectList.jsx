import { useState, useEffect } from "react"
import { projects } from "../data/projects"
import { useNavigate } from "react-router-dom"

function ProjectList(){

  // Set browser tab title
  useEffect(() => {
    document.title = "Projects Dashboard – Manage Construction Projects"
  }, [])

  const navigate = useNavigate()
  const [search,setSearch] = useState("")
  const [filter,setFilter] = useState("All")

  const filteredProjects = projects.filter((project)=>{
    const matchSearch = project.name.toLowerCase().includes(search.toLowerCase())
    const matchStatus = filter === "All" || project.status === filter
    return matchSearch && matchStatus
  })

  const getStatusColor = (status)=>{
    if(status === "Active") return "bg-green-500"
    if(status === "Completed") return "bg-blue-500"
    if(status === "Delayed") return "bg-red-500"
  }

  return(
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">

      <h1 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
        Projects
      </h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-3 mb-6 max-w-3xl mx-auto">

        <input
          type="text"
          placeholder="Search project..."
          className="border p-2 rounded w-full bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-300"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
          value={filter}
          onChange={(e)=>setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Delayed">Delayed</option>
        </select>

      </div>

      {/* Project Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        {filteredProjects.map((project)=>(
          <div
            key={project.id}
            onClick={()=>navigate("/dpr")}
            className="bg-white dark:bg-gray-800 p-4 rounded shadow cursor-pointer hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
              {project.name}
            </h2>

            <span
              className={`text-white text-sm px-2 py-1 rounded ${getStatusColor(project.status)}`}
            >
              {project.status}
            </span>

            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Start: {project.startDate}
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Location: {project.location}
            </p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default ProjectList