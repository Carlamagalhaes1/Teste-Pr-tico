import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fetchCourses, generateCourseDescription } from "../services/courses";
import Modal from "./Modal";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [aiText, setAiText] = useState({});
  const [aiLoadingId, setAiLoadingId] = useState(null);
  const [aiError, setAiError] = useState({});

  const [modalOpen, setModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState(null);

  const scrollRef = useRef(null);

  function cleanMarkdown(text) {
    if (!text) return "";
    return String(text)
      .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/`{1,3}([^`]+)`{1,3}/g, "$1")
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/__(.*?)__/g, "$1")
      .replace(/\*(.*?)\*/g, "$1")
      .replace(/_(.*?)_/g, "$1")
      .replace(/^\s{0,3}#{1,6}\s+/gm, "")
      .replace(/^\s*[-*+]\s+/gm, "")
      .replace(/^\s*\d+\.\s+/gm, "")
      .replace(/^\s*>\s?/gm, "")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\r\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  }

  useEffect(() => {
    fetchCourses()
      .then(setCourses)
      .catch((err) => {
        console.error(err);
        setError(err.message || "Erro ao carregar cursos");
      })
      .finally(() => setLoading(false));
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  async function handleGenerateDescription(course) {
    const id = course.id;
    setAiError((e) => ({ ...e, [id]: null }));
    setAiLoadingId(id);
    try {
      const text = await generateCourseDescription(id);
      setAiText((prev) => ({ ...prev, [id]: text }));
      setModalCourse(course);
      setModalOpen(true);
    } catch (err) {
      console.error(err);
      setAiError((e) => ({
        ...e,
        [id]: err?.response?.data?.error || err.message || "Falha ao gerar descrição",
      }));
    } finally {
      setAiLoadingId(null);
    }
  }

  if (loading) return <p className="p-8">Carregando cursos...</p>;
  if (error) return <p className="p-8 text-red-600">Erro ao carregar cursos: {error}</p>;

  return (
    <section className=" relative py-6 px-4 sm:px-6 lg:py-8 lg:px-[37px] max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-6 lg:ml-1">
        <h2 className="text-3xl font-bold text-black">Cursos</h2>
        <ChevronRight className="w-6 h-6 text-teal-600" />
      </div>
      <button onClick={() => scroll("left")} className="absolute left-2 sm:left-4 md:left-6 lg:left-10 
             top-1/2 -translate-y-1/2 z-10 
             bg-white/15 hover:bg-white/90 
             h-22 w-10 md:h-22 md:w-10 
             rounded-full flex items-center justify-center 
             shadow-lg transition"
      >
        <ChevronLeft className="text-black w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 sm:right-4 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-10 
             bg-white/15 hover:bg-white/90 
             h-22 w-10 md:h-22 md:w-10 
             rounded-full flex items-center justify-center 
             shadow-lg transition"
      >
        <ChevronRight className="text-black w-5 h-5 md:w-6 md:h-6" />
      </button>
      <div ref={scrollRef} className="flex gap-2 overflow-x-auto scroll-smooth  scrollbar-hide">
        {courses.map((course) => {
          const isLoading = aiLoadingId === course.id;
          const hasText = Boolean(aiText[course.id]);
          const errorText = aiError[course.id];

          return (
            <div key={course.id} className="flex-shrink-0 w-72 bg-[#17254D] rounded-lg overflow-hidden">
              <img src={course.imagem} alt={course.titulo} className="w-full h-70 object-cover" />
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

                <button onClick={() => handleGenerateDescription(course)} disabled={isLoading}
                  className="mt-4 w-full bg-teal-400 hover:bg-teal-500 disabled:opacity-60 text-black font-semibold px-3 py-2 rounded"
                >
                  {isLoading ? "Gerando..." : "Gerar descrição (IA)"}
                </button>

                {errorText && (
                  <p className="mt-2 text-xs text-red-300">{errorText}</p>
                )}

                {hasText && (
                  <button
                    onClick={() => {
                      setModalCourse(course);
                      setModalOpen(true);
                    }}
                    className="mt-2 w-full bg-white/20 hover:bg-white/30 text-white font-semibold px-3 py-2 rounded"
                  >
                    Abrir
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={modalCourse?.titulo || "Descrição"} >
        <p className="text-gray-800 whitespace-pre-line leading-relaxed">
          {cleanMarkdown(modalCourse ? aiText[modalCourse.id] : "")}
        </p>
      </Modal>
    </section>
  );
}
