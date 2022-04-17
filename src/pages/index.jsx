import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Title from '../components/projects/Title';
import Footer from '../components/Footer';
import NavBar from '../components/navbar';
import Projects from '../components/projects/projects'
import ProjectGrid from '../components/projects/project-grid';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});


const IndexPage = () => {
  return (
<ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <main>
        <Title />
        <Container sx={{ py: 4 }} maxWidth="md">
          <ProjectGrid  projects={Projects} />
        </Container>
      </main>
      <Footer />              
    </ThemeProvider>
  )
}

export default IndexPage
