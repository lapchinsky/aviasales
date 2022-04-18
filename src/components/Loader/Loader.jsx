import React from "react";
import styles from './Loader.module.css'
import plane from '../../Images/plane.png'


const Loader = () => <div className={styles.loader}><img style={{width: 80, height: 85}} src={plane} alt="loading"/></div>

export default Loader;