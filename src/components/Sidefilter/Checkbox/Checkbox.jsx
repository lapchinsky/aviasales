import React from "react";
import styles from './Checkbox.module.css';

const Checkbox = ({id, input, active, toggleStops, sortedStoppages}) => {

    const check = (active) => active ? true : false;

    return (
        <div className={styles.checkbox}>
            <label className={styles.check} >
                <input type="checkbox" id={id} checked={check(active)} onChange={(e) => {
                    toggleStops(e.target.id)
                    sortedStoppages(e.target.id)
                    }} />
                <span className={styles.box}></span>
                {input}
            </label>
        </div>
    )
}

export default Checkbox;