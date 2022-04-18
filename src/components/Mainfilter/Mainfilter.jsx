import React from "react";
import styles from './Mainfilter.module.css'
import Filterbutton from "./Filterbutton/Filterbutton";
import {mainToggle, toggleTickets} from "../../store/ActionCreators/actionCreators";
import {connect} from "react-redux";

const Mainfilter = ({mainButtons, toggleButtons, toggleTickets, tickets}) => {

    return (
        <div className={styles.filter}>
            {mainButtons.map(btn => (<Filterbutton id={btn.id} key={btn.id} name={btn.name} active={btn.active} toggleButtons={toggleButtons} toggleTickets={toggleTickets} tickets={tickets}/>))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        mainButtons: state.MainReducer.mainButtons,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        toggleButtons: id => dispatch(mainToggle(id)),
        toggleTickets: id => dispatch(toggleTickets(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mainfilter)