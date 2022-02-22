import {SET_TICKETS, TOGGLE_BUTTON} from "../types";
import {ApiService} from "../../apiService/apiService";

const ticketService = new ApiService()

export function mainToggle(id) {
    return {
        type: TOGGLE_BUTTON,
        payload: id
    }
}

export function setTickets(tickets) {
    return {
        type: SET_TICKETS,
        payload: tickets
    }
}

export function getTickets() {
    return async (dispatch) => {
        const id = await ticketService.getId()
        const tickets = await ticketService.getAllTickets(id)
        dispatch(setTickets(tickets))
    }
}