import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { projects } from "../data/projects"
import toast from "react-hot-toast"

function DPRForm() {

  const navigate = useNavigate()

  // Set browser tab title
  useEffect(() => {
    document.title = "Submit Daily Progress Report"
  }, [])

  const [formData, setFormData] = useState({
    project:"",
    date:"",
    weather:"",
    description:"",
    workers:""
  })

  const [images,setImages] = useState([])

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleImageUpload = (e)=>{
    const files = Array.from(e.target.files)
    if(files.length > 3){
      toast.error("You can upload maximum 3 images")
      return
    }
    setImages(files)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(!formData.project || !formData.date || !formData.weather || !formData.description || !formData.workers){
      toast.error("Please fill all fields")
      return
    }

    toast.success("DPR Submitted Successfully")

    // Reset form
    setFormData({
      project: "",
      date: "",
      weather: "",
      description: "",
      workers: ""
    })
    setImages([])
  }

  return(
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">

      <h1 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
        Daily Progress Report
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded shadow max-w-lg mx-auto"
      >

        <select
          name="project"
          value={formData.project}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
        >
          <option value="">Select Project</option>
          {projects.map((p)=>(
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
        />

        <select
          name="weather"
          value={formData.weather}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
        >
          <option value="">Weather</option>
          <option>Sunny</option>
          <option>Cloudy</option>
          <option>Rainy</option>
        </select>

        <textarea
          name="description"
          value={formData.description}
          placeholder="Work Description"
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
        />

        <input
          type="number"
          name="workers"
          value={formData.workers}
          placeholder="Worker Count"
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
        />

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-3 text-gray-700 dark:text-gray-200"
        />

        {images.length>0 && (
          <div className="flex gap-2 mb-3">
            {images.map((img,index)=>(
              <img
                key={index}
                src={URL.createObjectURL(img)}
                className="w-20 h-20 object-cover rounded"
              />
            ))}
          </div>
        )}

        <button
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Submit DPR
        </button>

        <button
          type="button"
          onClick={()=>navigate("/projects")}
          className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white p-2 rounded transition"
        >
          Back to Projects
        </button>

      </form>

    </div>
  )
}

export default DPRForm