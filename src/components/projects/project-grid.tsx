import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"
import React from "react"
import { Project } from "./projects";
import {navigate} from "gatsby";

interface ProjectGridProps {
  projects: Project[]
}

const ProjectGrid = (props : ProjectGridProps) => {

    return (
        <Grid container spacing={4}>
        {props.projects.map((project) => (
          <Grid item key={project.name} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: '5%',
                }}
                image={project.image}
                alt="Project image"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => {
                    navigate(`/projects/${project.pageName}`)
                }} size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        </Grid>
    )
}

export default ProjectGrid;