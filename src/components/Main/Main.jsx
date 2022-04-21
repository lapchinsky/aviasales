import React, {useState} from "react";
import styles from './Main.module.css'
import Mainfilter from "../Mainfilter/Mainfilter";
import Tickets from "../Tickets/Tickets";
import Showmore from "../Showmore/Showmore";

const Main = ({mainButtons, toggleButtons, gettingTickets}) => {
    const [number, setNumber] = useState(4)

    const showMore = () => {
        setNumber(prev => prev + 5)
    }

    return (
        <main className={styles.main}>
            <Mainfilter mainButtons={mainButtons} toggleButtons={toggleButtons} />
            <Tickets gettingTickets={gettingTickets} number={number} />
            <Showmore showMore={showMore} />
        </main>
    )
}

export default Main