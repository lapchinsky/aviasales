import React from "react";
import styles from './Filterbutton.module.css'

const Filterbutton = ({id, name, active, toggleButtons, toggleTickets}) => {

    const btn = active => active ? <button className={styles.active} type='button' id={id} key={id} onClick={evt => {
            toggleButtons(evt.target.id)
            toggleTickets(evt.target.id)
        }}>{name}</button> :
        <button className={styles.button} type='button' id={id} key={id} onClick={evt => {
            toggleButtons(evt.target.id)
            toggleTickets(evt.target.id)
        }}>{name}</button>


    return (
        <>
            {btn(active)}
        </>
    )
}

export default Filterbutton