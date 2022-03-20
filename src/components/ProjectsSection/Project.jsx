import styles from './ProjectSection.module.scss'

const Project = ({ project }) => {

    return (
        <a href={project.link} target="_blank" rel="noreferrer">
            <div className={styles.project}>
                <div className={styles.img_section}>
                    <img src={`/files/${project.thumbnail}`} alt="" />
                </div>
                <div className={styles.desc_section}>
                    <h2>{project.title}</h2>
                    <p>{project.desc}</p>
                </div>
            </div>
        </a>
    )
}

export default Project
