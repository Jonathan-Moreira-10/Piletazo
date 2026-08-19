
import { AppBar, Box, Button, Drawer, IconButton, Toolbar} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import logoPiletazo from "../../assets/logoPiletazo.png";


function NavBar({ navArrayLinks }: { navArrayLinks: { tittle: string; path: string }[] }) {
const [open, setOpen] = useState(false);
  return (
    <>
    <AppBar  sx={{backgroundColor: 'primary.main'}} position="sticky">
      <Toolbar sx={{
    justifyContent: { xs: "space-between", sm: "initial" }}}>
        <IconButton onClick={() => setOpen(true)}  sx={{mr:0, borderColor:'white',display:{xs:'block', sm:'none'}}}
        color="inherit"
          size="large"
         >
          <MenuIcon />
        </IconButton>

        <Box sx={{display:{xs:'none', sm:'flex'},justifyContent:"center",flexGrow:1, alignItems:"center"}} >
         <Button component="a" href="./">
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
           '&:hover': 
            { backgroundColor: 'white',  transform: 'scale(1.05)', color:'primary.main',transition:'all 0.3s'   
    }
        }}
      />
         </Button>
          {navArrayLinks.map((item) => (
          <Button component="a" href={item.path} key={item.tittle} sx={{color:'white',ml:2,mr:2,p:2, 
            '&:hover': 
            { backgroundColor: 'white',  transform: 'scale(1.05)', color:'primary.main',transition:'all 0.3s'   
    }
  }}>{item.tittle}</Button>
        ))}      
        </Box>
      </Toolbar>
    </AppBar>
   <Drawer 
   open={open}
    anchor="left"
    onClose={() => setOpen(false)}
    sx={{display:{xs:'flex', sm:'none'}}}
    >
    
    <NavListDrawer navArrayLinks={navArrayLinks} />
   </Drawer>
    </>
    

  )
}

export default NavBar;
