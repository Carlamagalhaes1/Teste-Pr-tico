import api from "./api";

export async function fetchCourses() {
  const res = await api.get("/courses");
  return res.data;
}

export async function generateCourseDescription(id) {
  const res = await api.get(`/courses/${id}/ai-description`);
  return res.data.descricao_ia;
}
