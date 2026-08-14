
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';


function NavBar({ navArrayLinks }: { navArrayLinks: { tittle: string; path: string }[] }) {
const [open, setOpen] = useState(false);
  return (
    <>
    <AppBar  sx={{backgroundColor: 'green'}} position="fixed">
      <Toolbar sx={{
    justifyContent: { xs: "space-between", sm: "initial" }}}>
        <IconButton onClick={() => setOpen(true)}  sx={{mr:0, borderColor:'white',display:{xs:'block', sm:'none'}}}
        color="inherit"
          size="large"
         >
          <MenuIcon />
        </IconButton>

        <Box sx={{display:{xs:'none', sm:'flex'},justifyContent:"space-between",flexGrow:1, alignItems:"center"}} >
         <Button component="a" href="/" sx={{color:'white',p:2}}>Home</Button>
         
          {navArrayLinks.map((item) => (
          <Button component="a" href={item.path} key={item.tittle} sx={{color:'white',p:2}}>{item.tittle}</Button>
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
