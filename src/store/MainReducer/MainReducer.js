import { TOGGLE_BUTTON} from "../types";

const initialState = {
    mainButtons: [
        {name: 'САМЫЙ ДЕШЕВЫЙ', id: 'cheapest', active: true},
        {name: 'САМЫЙ БЫСТРЫЙ', id: 'fastest', active: false},
        {name: 'ОПТИМАЛЬНЫЙ', id: 'optimum', active: false},
    ],
}


export default function MainReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_BUTTON: {
            return {
                mainButtons: state.mainButtons.map(btn => {
                    if (btn.id === action.payload ) {
                        btn.active = true
                    } else {
                        btn.active = false
                    }
                    return btn
                })
            }
        }
        default: return state
    }
}