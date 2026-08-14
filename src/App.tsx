import { Container, CssBaseline } from "@mui/material"
import NavBar from "./components/navBar/NavBar"
import Footer from "./components/footer/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

const navArrayLinks =[
{
 tittle: "Home",path: "/"
},
{
tittle: "Actividades",path: "/actividades"
},
{
tittle: "Quienes Somos",path: "/quienesSomos"
},
{
  tittle: "Contacto",path: "/contacto"
}

]


function App() {

  return (
    <>
    <CssBaseline />
   <NavBar navArrayLinks={navArrayLinks} />
<Container sx={{mt: 8, minHeight: "100vh",}}>
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/actividades" element={<Actividades />} />
   <Route path="/quienesSomos" element={<QuienesSomos />} />
   <Route path="/contacto" element={<Contacto />} />

  </Routes>

</Container>
<Footer/>

  




    </>
  )
}

export default App
