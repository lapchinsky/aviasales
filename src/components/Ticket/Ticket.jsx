import React from "react";
import styles from './Ticket.module.css'
import logo from '../../Images/S7 Logo.png'
import { minutesToHours } from "date-fns";

const Ticket = ({ticket}) => {

    const from = ticket.segments[0]
    const timeFrom = from.date.split('T')[1].split('.')[0].split(':').slice(0, 2).join(':')

    const to = ticket.segments[1]
    const timeTo = to.date.split('T')[1].split('.')[0].split(':').slice(0, 2).join(':')

    const hours = time => minutesToHours(time)
    const minutes = time => time - (minutesToHours(time) * 60)

    const price = String(ticket.price).split('')
    price.splice(-3,0,' ')

    function arriva(time, hours, minutes) {
        time = time.split(':')
        let h = Number(time[0]) + hours
        let m = Number(time[1]) + minutes
        if (m >= 60) {
            m -= 60;
            h += 1;
        }
        if (h >= 24) {
            h -= 24;
        }
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (h >= 24) {
            h -= 24;
        }
        return [h, m].join(':')
    }


    return (
        <div className={styles.ticket}>
            <div className={styles.header}>
                <p>{price.join('')}</p>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.body}>
                <div className={styles.info}>
                    <div className={styles.details}>
                        <h5>{from.origin} - {from.destination}</h5>
                        <p>{timeFrom} - {arriva(timeFrom, hours(from.duration), minutes(from.duration))}</p>
                    </div>
                    <div className={styles.details}>
                        <h5>В ПУТИ</h5>
                        <p>{hours(from.duration)}ч {minutes(from.duration)}м</p>
                    </div>
                    <div className={styles.details}>
                        <h5>{from.stops.length !== 0 ? from.stops.length : null} {from.stops.length === 1 ? 'ПЕРЕСАДКА': from.stops.length === 0 ? 'НЕТ ПЕРЕСАДОК' : 'ПЕРЕСАДКИ'}</h5>
                        <p>{from.stops.map(el => el).join(',')}</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.details}>
                        <h5>{to.origin} - {to.destination}</h5>
                        <p>{timeTo} - {arriva(timeTo, hours(to.duration), minutes(to.duration))}</p>
                    </div>
                    <div className={styles.details}>
                        <h5>В ПУТИ</h5>
                        <p>{hours(to.duration)}ч {minutes(to.duration)}м</p>
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