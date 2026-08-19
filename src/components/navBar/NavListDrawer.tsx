import { Box, List, ListItem,ListItemText, } from "@mui/material"


import ListItemButton from "@mui/material/ListItemButton";

export default function NavListDrawer({ navArrayLinks }: { navArrayLinks: { tittle: string; path: string }[] }) {
  return (
   <Box sx={{width:250 }}>
    <nav>
         <List>
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