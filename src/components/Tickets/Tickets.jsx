import React, {useEffect} from "react";
import styles from './Tickets.module.css'
import Ticket from "../Ticket/Ticket";
import {getTickets} from "../../store/ActionCreators/actionCreators";
import {connect} from "react-redux";
import Loader from "../Loader/Loader";


const Tickets = ({gettingTickets, tickets}) => {

    useEffect(() => {
        gettingTickets()
    }, [])

    return (
        <div className={styles.tickets}>
            {tickets.length !== 0 ? tickets.slice(0, 4).map(ticket => <Ticket key={ticket.price} ticket={ticket}/>) :
                <div style={{width: 80, height: 85}}><Loader /></div>}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tickets: state.TicketReducer.tickets,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        gettingTickets: () => dispatch(getTickets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets)