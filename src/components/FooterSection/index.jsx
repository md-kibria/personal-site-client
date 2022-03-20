import styles from './FooterSection.module.scss'
import footerBg from '../../images/footer_bg.png'
import WithData from '../HOC/WithData'
import { useRef } from 'react'
import { useEffect } from 'react'

const FooterSection = ({data, setChatTop}) => {

    const chatRef = useRef(null)

    useEffect(() => {
        setChatTop(chatRef.current.offsetTop)
    }, [])

    return (
        <div className={styles.footer} ref={chatRef}>
            <div className={styles.footer_container}>
                <img src={footerBg} alt="" />
                <div className={styles.desc}>
                    <h3>WORK INQUERY</h3>
                    <a href={data.chatLink} target="_blank" rel="noreferrer">
                        <button>Let's Chat</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WithData(FooterSection)
