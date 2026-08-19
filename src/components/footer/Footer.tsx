import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        position: "sticky",   // se queda abajo pero no tapa contenido
        bottom: 0,
      }}
    >
      <Typography
        variant="h6"
        color="inherit"
        align="center"
        sx={{ p: 2 }}
      >
        © 2023 My App. All rights reserved.
      </Typography>
    </Box>
  );
}