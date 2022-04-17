import { Box, Typography } from "@mui/material"
import React from "react"
import Copyright from "./copyright"

const Footer = () => {

    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        </Typography>
        <Copyright />
      </Box>
    )
}

export default Footer;