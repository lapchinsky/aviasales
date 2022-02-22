import MainReducer from "./MainReducer/MainReducer";
import SideReducer from "./SideReducer/SideReducer";
import {combineReducers} from "redux";
import TicketReducer from "./TicketReducer/TicketReducer";

export default combineReducers({
    MainReducer, SideReducer, TicketReducer
})