import React from "react";
import styles from './Main.module.css'
import Mainfilter from "../Mainfilter/Mainfilter";
import Tickets from "../Tickets/Tickets";
import Showmore from "../Showmore/Showmore";

const Main = ({mainButtons, toggleButtons, gettingTickets}) => {
    return (
        <main className={styles.main}>
            <Mainfilter mainButtons={mainButtons} toggleButtons={toggleButtons} />
            <Tickets gettingTickets={gettingTickets} />
            <Showmore />
        </main>
    )
}

export default Main