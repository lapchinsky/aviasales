const initialState = {
    sideButtons: [
        {id: "All", input: "Все"},
        {id: "NoOne", input: "Без пересадок"},
        {id: "One", input: "Одна пересадка"},
        {id: "Two", input: "Две пересадки"},
        {id: "Three", input: "Три пересадки"},
    ],
}


export default function SideReducer(state = initialState, action) {
    switch (action.type) {
        default: return state
    }
}