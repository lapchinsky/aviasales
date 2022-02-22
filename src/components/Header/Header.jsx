import React from "react";
import styles from './Header.module.css'
import plane from '../../Images/plane.png'

const Header = props => {
    return (
        <header className={styles.header}>
            <img className={styles.plane} src={plane} alt="plane-logo" />
        </header>
    )
}

export default Header;