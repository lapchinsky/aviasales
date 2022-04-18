import React from "react";
import styles from './Sidefilter.module.css'
import Checkbox from "./Checkbox/Checkbox";
import {connect} from "react-redux";
import { toggleStops, sortedStoppages } from "../../store/ActionCreators/actionCreators";

const Sidefilter = ({sideButtons, toggleStops, sortedStoppages}) => {

    return (
        <div className={styles.filter}>
            <h1 className={styles.header}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
            {
                sideButtons.map(btn => <Checkbox key={btn.id} id={btn.id} input={btn.input} active={btn.active} toggleStops={toggleStops} sortedStoppages={sortedStoppages} /> )
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        sideButtons: state.SideReducer.sideButtons,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        toggleStops: id => dispatch(toggleStops(id)),
        sortedStoppages: id => dispatch(sortedStoppages(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidefilter)