import { CssBaseline } from "@mui/material"
import NavBar from "./components/navBar/NavBar"
import Footer from "./components/footer/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Actividades from "./pages/Actividades"
import QuienesSomos from "./pages/QuienesSomos"
import Contacto from "./pages/Contacto"


const navArrayLinks =[

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
<CssBaseline/>
  <NavBar  navArrayLinks={navArrayLinks} />

  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/actividades" element={<Actividades/>} />
   <Route path="/quienesSomos" element={<QuienesSomos/>} />
   <Route path="/contacto" element={<Contacto/>} />

  </Routes>

<Footer/>
   
</>
  )
}

export default App
