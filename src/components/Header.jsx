import React from "react";
import { Typography, Box } from "@mui/material";

export default function Header({ title, description }) {
  return (
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {description}
      </Typography>
    </Box>
  );
}
