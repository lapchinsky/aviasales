import React from "react";
import styles from './Checkbox.module.css';

const Checkbox = ({id, input}) => {
    return (
        <div className={styles.checkbox}>
            <label className={styles.check}>
                <input type="checkbox" id={id}/>
                <span className={styles.box}></span>
                {input}
            </label>
        </div>
    )
}

export default Checkbox;