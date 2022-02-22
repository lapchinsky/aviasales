import React from "react";
import styles from './Ticket.module.css'
import logo from '../../Images/S7 Logo.png'

const Ticket = ({ticket}) => {

    const from = ticket.segments[0]
    const timeFrom = from.date.split('T')[1].split('.')[0].split(':').slice(0, 2).join(':')

    const to = ticket.segments[1]
    const timeTo = to.date.split('T')[1].split('.')[0].split(':').slice(0, 2).join(':')


    console.log(ticket)

    return (
        <div className={styles.ticket}>
            <div className={styles.header}>
                <p>{ticket.price}</p>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.body}>
                <div className={styles.info}>
                    <div className={styles.details}>
                        <h5>{from.origin} - {from.destination}</h5>
                        <p>{timeFrom} - 08:00</p>
                    </div>
                    <div className={styles.details}>
                        <h5>В ПУТИ</h5>
                        <p>{Math.floor(from.duration / 60)}ч {Math.ceil((from.duration % 60) * 60 / 100)}м</p>
                    </div>
                    <div className={styles.details}>
                        <h5>{from.stops.length !== 0 ? from.stops.length : null} {from.stops.length === 1 ? 'ПЕРЕСАДКА': from.stops.length === 0 ? 'НЕТ ПЕРЕСАДОК' : 'ПЕРЕСАДКИ'}</h5>
                        <p>{from.stops.map(el => el).join(',')}</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.details}>
                        <h5>{to.origin} - {to.destination}</h5>
                        <p>{timeTo} - 08:00</p>
                    </div>
                    <div className={styles.details}>
                        <h5>В ПУТИ</h5>
                        <p>{Math.floor(to.duration / 60)}ч {Math.ceil((to.duration % 60) * 60 / 100)}м</p>
                    </div>
                    <div className={styles.details}>
                        <h5>{to.stops.length !== 0 ? to.stops.length : null} {to.stops.length === 1 ? 'ПЕРЕСАДКА': to.stops.length === 0 ? 'НЕТ ПЕРЕСАДОК' : 'ПЕРЕСАДКИ'}</h5>
                        <p>{to.stops.map(el => el).join(',')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket