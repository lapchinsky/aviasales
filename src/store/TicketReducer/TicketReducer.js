import { SET_TICKETS} from "../types";

const initialState = {
    tickets: [],
}


export default function TicketReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TICKETS: {
            return {
                tickets: action.payload
            }
        }
        default: return state
    }
}