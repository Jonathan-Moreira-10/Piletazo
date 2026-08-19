import Box from "@mui/material/Box";
import fondoPiletazo2 from "../assets/fondoPiletazo2.png";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100%",      
        overflow: "hidden",
      }}
    >
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
        sx={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", fontWeight: "bold" ,mt:12,border:'ButtonShadow',color:'primary.main',
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
        sx={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",fontWeight: "bold", mb:12,border:'ButtonShadow',color:'secundary.main',
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

    
  );
}