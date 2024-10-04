import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Container, Box } from '@mui/material';
import BuscarAlumno from './components/BuscarAlumno';

// Tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#004080', 
    },
    secondary: {
      main: '#c1c1c1', 
    },
    text: {
      primary: '#333', 
      secondary: '#555', 
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2rem',
      color: '#004080',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      color: '#004080',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          marginTop: 16,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: 16,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '16px',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          backgroundColor: '#f5f5f5', 
        }}
      >
        <Box
          sx={{
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: 'white',
            textAlign: 'center',
          }}
        >
          <h1>Buscar Cursos por Alumno</h1>
          <BuscarAlumno />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
