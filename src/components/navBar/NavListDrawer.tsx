import { Box, List, ListItem,ListItemText, } from "@mui/material"
import logoPiletazo from "../../assets/logoPiletazo.png"

import ListItemButton from "@mui/material/ListItemButton";

export default function NavListDrawer({ navArrayLinks }: { navArrayLinks: { tittle: string; path: string }[] }) {
  return (
   <Box sx={{width:250 }}>
    <nav>
         <List>
          <ListItemButton component="a" href="./">
          <Box
        component="img"
        src={logoPiletazo}
        alt="Logo Escuela de Natación"
        sx={{
          width: 50,
          height: 50,
          borderRadius: "50%",  
          objectFit: "cover",
          border: "1px solid black", 
        }}
      />
         </ListItemButton>
       {navArrayLinks.map((item) => (
         <ListItem disablePadding key={item.tittle}>
            <ListItemButton component="a" href={item.path}>
                 <ListItemText primary={item.tittle} />
            </ListItemButton>
           
          </ListItem>
         ))}    


       
</List>
    </nav>
      
   </Box>


  )
  }