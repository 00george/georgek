
export interface Project {
    name: string,
    pageName: string,
    image: string,
    description: string
}

const WebsiteProject : Project = {
    name: "Personal website",
    pageName: "personal-website",
    image: "link to image",
    description: "desc"   
}

const Projects = [
    WebsiteProject
]

export default Projects;
