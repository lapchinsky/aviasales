import React from "react";
import styles from './Sidefilter.module.css'
import Checkbox from "./Checkbox/Checkbox";
import {connect} from "react-redux";

const Sidefilter = ({sideButtons}) => {

    return (
        <div className={styles.filter}>
            <h1 className={styles.header}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
            {
                sideButtons.map(btn => <Checkbox key={btn.id} id={btn.id} input={btn.input} /> )
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
    }
}

export default connect(mapStateToProps)(Sidefilter)