import { useEffect, useState, useRef } from "react"
import api from "../services/api"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Courses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    api.get("/courses.php")
      .then(res => setCourses(res.data))
      .catch((err) => {
        console.error(err)
        setError(err.message || "Erro ao carregar cursos")
      })
      .finally(() => setLoading(false))
  }, [])

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      })
    }
  }

  if (loading) return <p className="p-8">Carregando cursos...</p>
  if (error) return <p className="p-8 text-red-600">{error}</p>

  return (
    <section className="relative py-12 px-[37px] max-w-7xl mx-auto">
     
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-3xl font-bold text-black">Cursos</h2>
        <ChevronRight className="w-6 h-6 text-teal-600" />
      </div>

      
      <button
        onClick={() => scroll("left")}
        className="absolute left-[17px] top-[50%] -translate-y-1/2 z-10 bg-white/15 h-22 w-10 rounded-full flex items-center justify-center shadow"
      >
        <ChevronLeft className="text-black w-5 h-5" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/15  h-24 w-10 rounded-full flex items-center justify-center shadow"
      >
        <ChevronRight className="text-black w-5 h-5" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth py-2 scrollbar-hide"
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex-shrink-0 w-72 bg-[#17254D] rounded-lg overflow-hidden"
          >
           
            <img
              src={course.imagem}
              alt={course.titulo}
              className="w-full h-70 object-cover"
            />

            <div className="p-4">
            
              <div className="flex gap-1 text-[11px] mb-2">
                {course.tipo.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[#D0FBEB] px-0.5 border border-[#D0FBEB] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            
              <h3 className="font-sans font-bold text-2xl text-white leading-tight">
                {course.titulo}
              </h3>

              
              <p className="text-sm mt-7 text-white">Por {course.autor}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
