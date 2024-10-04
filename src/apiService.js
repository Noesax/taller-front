import axios from 'axios';

const API_URL = 'http://localhost:8080/api/alumnocursos';

export const getCursosByAlumnoId = async (alumnoId) => {
  try {
    const response = await axios.get(`${API_URL}/alumno/${alumnoId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cursos:', error);
    throw error;
  }
};