import axios from 'axios'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import Project from './Project'
import styles from './ProjectSection.module.scss'

const ProjectSection = ({setProjectTop}) => {

    const projectRef = useRef(null)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function fetchProjects() {
            const res = await axios.get('/api/projects')

            if(res.data) setProjects(res.data.projects)
        }

        fetchProjects()
    }, [])

    useEffect(() => {
        setProjectTop(projectRef.current.offsetTop)
    }, [])

    return (
        <div className={styles.projects} ref={projectRef}>
            <h1>Lastet Projects</h1>
            <div className={styles.project_container}>
                {projects.map(project => (
                    <Project project={project} key={project._id} />
                ))}
            </div>
        </div>
    )
}

export default ProjectSection
