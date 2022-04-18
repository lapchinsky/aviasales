import { TOGGLE_STOPS } from "../types"

const initialState = {
    sideButtons: [
        {id: "All", input: "Все", active: true},
        {id: "Null", input: "Без пересадок", active: false},
        {id: "One", input: "Одна пересадка", active: false},
        {id: "Two", input: "Две пересадки", active: false},
        {id: "Three", input: "Три пересадки", active: false},
    ],
}


export default function SideReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_STOPS: {
            if (action.payload === 'All') {
            return {
                sideButtons: state.sideButtons.map(btn => {
                    if (btn.id === action.payload ) {
                        btn.active = true
                    } else {
                        btn.active = false
                    }
                    return btn
                })
            }
        } else {
            return {
                sideButtons: state.sideButtons.map(btn => {
                    if (btn.id === 'All') {
                        btn.active = false;
                    } else if (btn.id === action.payload && btn.active === false ) {
                        btn.active = true
                    }  else if (btn.id === action.payload && btn.active === true ) {
                        btn.active = false
                    } 
                    return btn
                })
            }
        }
    }
        default: return state
    }
}