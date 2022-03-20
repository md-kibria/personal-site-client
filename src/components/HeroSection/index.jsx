import WithData from '../HOC/WithData'
import styles from './HeroSection.module.scss'

const HeroSection = ({ data }) => {

    const { heroTitle, heroDesc, heroImg } = data

    return (
        <div className={styles.hero}>
            <div className={styles.desc_section}>
                <h1>{heroTitle}</h1>
                <p>{heroDesc}</p>
                <a href={data.chatLink} target="_blank" rel="noreferrer">
                    <button>Hire Me</button>
                </a>
            </div>
            <div className={styles.img_section}>
                <img src={`/files/${heroImg}`} alt={heroTitle} />
            </div>
        </div>
    )
}

export default WithData(HeroSection)
