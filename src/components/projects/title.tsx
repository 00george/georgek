import { Box, Container, Typography } from "@mui/material"
import React from "react"

const Title = () => {
    return (
        <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 2,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
          >
            Projects
          </Typography>
        </Container>
      </Box>
    )
}

export default Title;