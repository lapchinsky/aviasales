import {SET_TICKETS, TOGGLE_TICKETS} from "../types";

const initialState = {
    tickets: [],
    baseTickets: []
}




export default function TicketReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TICKETS: {
            return {
                tickets: [...action.payload],
                baseTickets: [...action.payload]
            }
        }
        case TOGGLE_TICKETS: {
            return {
                tickets: [...action.payload],
                baseTickets: [...state.baseTickets]
            }
        }
        default: return state
    }
}