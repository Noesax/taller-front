import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, CircularProgress, Typography, Card, CardContent } from '@mui/material';
import { getCursosByAlumnoId } from '../apiService';

const CursosAlumno = ({ alumnoId }) => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const data = await getCursosByAlumnoId(alumnoId);
        setCursos(data);
      } catch (error) {
        setError('Error fetching cursos');
      } finally {
        setLoading(false);
      }
    };
    fetchCursos();
  }, [alumnoId]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Card sx={{ width: '100%', maxWidth: 600, marginTop: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Cursos del Alumno ID: {alumnoId}
        </Typography>
        <List>
          {cursos.map((curso) => (
            <ListItem key={curso.cursoId}>
              <ListItemText
                primary={`${curso.nombre} (${curso.codigo})`}
                secondary={curso.tipo}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CursosAlumno;
