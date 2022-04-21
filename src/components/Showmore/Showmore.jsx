import React from "react";
import styles from './Showmore.module.css'

const Showmore = ({showMore}) => {
    return (
        <div className={styles.showmore}>
            <button onClick={() => showMore()}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</button>
        </div>
    )
}

export default Showmore;