import {SET_TICKETS, TOGGLE_BUTTON, TOGGLE_STOPS, TOGGLE_TICKETS} from "../types";
import {ApiService} from "../../apiService/apiService";
import {store} from "../store";

const ticketService = new ApiService()

export function mainToggle(id) {
    return {
        type: TOGGLE_BUTTON,
        payload: id
    }
}

export function toggleStops(id) {
    return {
        type: TOGGLE_STOPS,
        payload: id
    }
}

export function setTickets(tickets) {
    return {
        type: SET_TICKETS,
        payload: tickets
    }
}

export function toggleState(tickets) {
    return {
        type: TOGGLE_TICKETS,
        payload: tickets
    }
}

export function toggleTickets(id) {
    let tickets = store.getState().TicketReducer.baseTickets
    return (dispatch) => {
        if (id === 'cheapest') {
            tickets.sort(function (a, b) {
                 return a.price - b.price
            })
        }
        if (id === 'fastest') {
            tickets.sort(function (a, b) {
                return (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration)
            })
        }
        if (id === 'optimum') {
            tickets.sort(function (a, b) {
                return b.price - a.price
           })
        }
        dispatch(setTickets(tickets))
    }
}

export function sortedStoppages(id) {
    const base = store.getState().TicketReducer.baseTickets
    let tickets
    return (dispatch) => {
        if (id === 'All') {
            tickets = base;
        }
        if (id === 'Null') {
            tickets = base.filter(function (ticket) {
                return (ticket.segments[0].stops.length + ticket.segments[1].stops.length) === 0
            })
        }
        if (id === 'One') {
            tickets = base.filter(function (ticket) {
                return (ticket.segments[0].stops.length + ticket.segments[1].stops.length) <= 1
            })
        }
        if (id === 'Two') {
            tickets = base.filter(function (ticket) {
                return (ticket.segments[0].stops.length + ticket.segments[1].stops.length) <= 2
            })
        }
        if (id === 'Three') {
            tickets = base.filter(function (ticket) {
                return (ticket.segments[0].stops.length + ticket.segments[1].stops.length) <= 3
            })
        }

        
        dispatch(toggleState(tickets))
    }
}


export function getTickets() {
    return async (dispatch) => {
        const id = await ticketService.getId()
        const tickets = await ticketService.getAllTickets(id)
        tickets.sort(function (a, b) {
            return a.price - b.price
        })
        dispatch(setTickets(tickets))
    }
}