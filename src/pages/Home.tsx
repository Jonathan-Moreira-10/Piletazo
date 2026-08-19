import Box from "@mui/material/Box";
import fondoPiletazo2 from "../assets/fondoPiletazo2.png";
import { Typography,Grid,Card,CardContent} from "@mui/material";
import natacion from "../assets/natacion.jpg"


export default function Home() {
  return (
    /*
  Caja Main*/
    <Box component="main"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100%",      
        overflow: "hidden",
      }}
    >
     { /*
  Banner*/}
      <Box component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100%",      
        overflow: "hidden",
      }}>
       <Box
        component="img"
        src={fondoPiletazo2}
        alt="Banner"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          

        }}
      >
        <Typography variant="h1" 
        sx={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", fontWeight: "bold" ,mt: { xs: 4, md: 12 },border:'ButtonShadow',color:'primary.main',
          fontSize:{
             xs: "clamp(1.5rem, 6vw, 3rem)", 
             sm: "clamp(2rem, 5vw, 3.5rem)", 
             md: "clamp(3.5rem, 5vw, 6rem)",  
            lg: "clamp(5rem, 6vw, 8rem)",    
          }
        }}>
          Escuela de Natación
        </Typography>
        <Typography variant="h2" 
        sx={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",fontWeight: "bold", mb: { xs: 4, md: 12 },border:'ButtonShadow',color:'secundary.main',
          fontSize:{
             xs: "clamp(1.5rem, 6vw, 3rem)", 
             sm: "clamp(2rem, 5vw, 3.5rem)", 
             md: "clamp(2.5rem, 4vw, 4rem)",  
            lg: "clamp(3rem, 3vw, 5rem)",    
          }
        }}>
          Aprende • Mejora • Supérate
        </Typography>
      </Box>
      </Box>
      
      {/*Seccion tarjetas */}
   <Box component={"section"}
      sx={{
        display: "flex",
        flexDirection: {md:"row",xs:"column"}, 
        flexWrap: "wrap",      
        width: "100%",
      }}
    >
      {/* Tarjeta 1 */}
      <Box component={"a"} href="./" sx={{textDecoration:"none", flex: {md:"0 0 50%",sm: "0 0 100%"},p:2,mt:2,mb:2, "&:hover img":{
          opacity:1
        }
      }}>
        <Box component="hr" sx={{ borderColor: "primary.main", my: 2}} />
        <Card sx={{border:"none",boxShadow:"none",overflow: "hidden"
       }}>
         
          <CardContent sx={{overflow:"hidden"}}> 
            <Typography variant="h4" 
            sx={{ fontWeight: "bold",border:'ButtonShadow',color:'primary.main',fontSize:"2rem"}}
            >Deportes</Typography>
            <Typography variant="h5" sx={{mt:2,mb:2}}>Ejercicios en el agua para mejorar tu salud.</Typography>
            <Box
              component="img"
              src={natacion}
              alt="Deportes"
              sx={{ width: "100%", height: "80%", objectFit: "cover" ,transition: "opacity 0.9s ease",overflow:"hidden"
                ,opacity:0.7
              }}
            />
          </CardContent>
          
        </Card>
        <Box component="hr" sx={{ borderColor: "primary.main", my: 2}} />

      </Box>

      {/* Tarjeta 2 */}
      <Box component={"a"} href="./" sx={{textDecoration:"none", flex: {md:"0 0 50%",sm: "0 0 100%"},p:2,mt:2,mb:2, "&:hover img":{
          opacity:1
        }
      }}>
      <Box component="hr" sx={{ borderColor: "primary.main", my: 2 ,display:{xs:"none",sm:"block"}}} />
        <Card sx={{border:"none",boxShadow:"none",overflow: "hidden"
       }}>
          <CardContent sx={{overflow:"hidden"}}> 
            <Box
              component="img"
              src={natacion}
              alt="Deportes"
              sx={{ width: "100%", height: "80%", objectFit: "cover" ,transition: "opacity 0.9s ease",overflow:"hidden"
                ,opacity:0.7}}
            />
            <Typography variant="h4" 
            sx={{ fontWeight: "bold",border:'ButtonShadow',color:'primary.main',fontSize:"2rem"}}
            >Deportes</Typography>
            <Typography variant="h5" sx={{mt:2,mb:2}}>Ejercicios en el agua para mejorar tu salud.</Typography>
          </CardContent>
           
        </Card>
        <Box component="hr" sx={{ borderColor: "primary.main", my: 2}} />
      </Box>

      {/* Tarjeta 3 */}
      <Box component={"a"} href="./" sx={{textDecoration:"none", flex: {md:"0 0 50%",sm: "0 0 100%"},p:2,mt:2,mb:2, "&:hover img":{
          opacity:1
        }
      }}>
      <Box component="hr" sx={{ borderColor: "primary.main", my: 2}} />
        <Card sx={{border:"none",boxShadow:"none",overflow: "hidden"
       }}>
      
          <CardContent sx={{overflow:"hidden"}}> 
             <Typography variant="h4" 
            sx={{ fontWeight: "bold",border:'ButtonShadow',color:'primary.main',fontSize:"2rem"}}
            >Deportes</Typography>
            <Typography variant="h5" sx={{mt:2,mb:2}}>Ejercicios en el agua para mejorar tu salud.</Typography>
            <Box
              component="img"
              src={natacion}
              alt="Deportes"
              sx={{ width: "100%", height: "80%", objectFit: "cover" ,transition: "opacity 0.9s ease",overflow:"hidden"
                ,opacity:0.7}}
            />
          </CardContent>
           
        </Card>
      <Box component="hr" sx={{ borderColor: "primary.main", my: 2 ,display:{xs:"none",sm:"block"}}} />
      </Box>
      {/* Tarjeta 4 */}
      <Box component={"a"} href="./" sx={{textDecoration:"none", flex: {md:"0 0 50%",sm: "0 0 100%"},p:2,mt:2,mb:2, "&:hover img":{
          opacity:1
        }
      }}>
      <Box component="hr" sx={{ borderColor: "primary.main", my: 2}} />
        <Card sx={{border:"none",boxShadow:"none",overflow: "hidden"
       }}>
          <CardContent sx={{overflow:"hidden"}}> 
            <Box
              component="img"
              src={natacion}
              alt="Deportes"
              sx={{ width: "100%", height: "80%", objectFit: "cover" ,transition: "opacity 0.9s ease",overflow:"hidden"
                ,opacity:0.7}}
            />
            <Typography variant="h4" 
            sx={{ fontWeight: "bold",border:'ButtonShadow',color:'primary.main',fontSize:"2rem"}}
            >Deportes</Typography>
            <Typography variant="h5" sx={{mt:2,mb:2}}>Ejercicios en el agua para mejorar tu salud.</Typography>
          </CardContent>
           
        </Card>
        <Box component="hr" sx={{ borderColor: "primary.main", my: 2}} />
      </Box>
    </Box>
  
    </Box>

    
  );
}