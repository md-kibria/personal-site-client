import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import saveResume from '../../utils/resumeDownloader'
import WithData from '../HOC/WithData'
import styles from './AboutSection.module.scss'

const AboutSection = ({ data, setAboutTop }) => {

    const aboutRef = useRef(null)
    const { aboutImg, aboutDesc, resume } = data
    const handleSaveResume = () => {
        saveResume(resume)
    }

    useEffect(() => {
        setAboutTop(aboutRef.current.offsetTop)
    }, [])


    return (
        <div className={styles.about} ref={aboutRef}>
            <div className={styles.img_section}>
                <div className={styles.img}>
                    <img src={`/files/${aboutImg}`} alt="" />
                </div>
            </div>
            <div className={styles.desc_section}>
                <h1>About Me</h1>
                <p>{aboutDesc}</p>
                <button type='button' onClick={handleSaveResume}>Resume</button>
            </div>
        </div>
    )
}

export default WithData(AboutSection)
