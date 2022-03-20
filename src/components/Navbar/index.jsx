import styles from './Navbar.module.scss'
import arrTop from '../../images/arrTop.svg'
import { useEffect } from 'react'
import { useState } from 'react'
import bar from '../../images/bar.svg'
import cross from '../../images/cross.svg'

const Navbar = ({aboutTop, projectTop, chatTop}) => {
    const [IsBg, setIsBg] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', function () {
            setIsBg(window.scrollY > 70)
        })
    }, [])

    // go to top handler function 
    const gotoHome = () => {
        setIsOpen(false)
        window.scrollTo(0, 0)
    }

    // goto about handler function
    const gotoAbout = () => {
        setIsOpen(false)
        window.scrollTo(0, aboutTop)
    }

    // goto project handler function
    const gotoProject = () => {
        setIsOpen(false)
        window.scrollTo(0, projectTop)
    }

    // goto chat handler function
    const gotoChat = () => {
        setIsOpen(false)
        // window.scrollTo(0, chatTop)
        window.scrollTo(0, chatTop + 800)
    }

    return (
        <div className={`${styles.navbar} ${IsBg ? styles.wbg : ''}`}>
            <div className={styles.navbar_container}>
                <h1 className={styles.logo}>Logo</h1>

                <div className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen
                        ? <img src={cross} />
                        : <img src={bar} />}
                </div>

                <ul className={`${styles.nav_list} ${isOpen ? styles.open : ''}`}>
                    <li onClick={gotoHome}>Home</li>
                    <li onClick={gotoAbout}>About</li>
                    <li onClick={gotoProject}>Projects</li>
                    <li onClick={gotoChat}>Chat</li>
                </ul>

                <div className={styles.to_top} onClick={gotoHome}>
                    <img src={arrTop} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
