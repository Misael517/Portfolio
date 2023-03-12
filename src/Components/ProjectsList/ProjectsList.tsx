import Project1 from './ProjectsIMG/Img1.png'
import Project2 from './ProjectsIMG/Img2.jpg'
import Project3 from './ProjectsIMG/Img3.jpg'
import Project4 from './ProjectsIMG/Img4.jpg'
import Project5 from './ProjectsIMG/Img5.jpg'
import './ProjectsList.css'

interface Project {
    Id: number,
    name: string,
    image: string,
}

export default function ProjectsList() {
    const projects: Project[] = [
        { Id: 1, name: 'Project #1', image: Project1 },
        { Id: 2, name: 'Project #2', image: Project2 },
        { Id: 3, name: 'Project #3', image: Project3 },
        { Id: 4, name: 'Project #4', image: Project4 },
        { Id: 5, name: 'Project #5', image: Project5 }
    ];

    return (
        <div>
            {projects.map((project) => (
                <div className='Projects-Article' key={project.Id}>
                    <img src={project.image} className='Projects-Img' alt={project.name} />
                </div>
            ))}

        </div>
    )
}