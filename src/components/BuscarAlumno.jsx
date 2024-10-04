import React, { useState } from 'react';
import { TextField, Button, Box, Card, CardContent, Typography } from '@mui/material';
import CursosAlumno from './CursosAlumno';

const BuscarAlumno = () => {
  const [alumnoId, setAlumnoId] = useState('');
  const [showCursos, setShowCursos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCursos(true);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Card sx={{ width: '100%', maxWidth: 400, marginBottom: 2 }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Ingrese ID del alumno:"
              value={alumnoId}
              onChange={(e) => setAlumnoId(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Buscar Cursos
            </Button>
          </form>
        </CardContent>
      </Card>
      {showCursos && <CursosAlumno alumnoId={alumnoId} />}
    </Box>
  );
};

export default BuscarAlumno;
