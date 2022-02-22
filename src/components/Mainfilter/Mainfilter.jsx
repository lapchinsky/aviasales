import React from "react";
import styles from './Mainfilter.module.css'
import Filterbutton from "./Filterbutton/Filterbutton";
import { mainToggle} from "../../store/ActionCreators/actionCreators";
import {connect} from "react-redux";

const Mainfilter = ({mainButtons, toggleButtons}) => {

    return (
        <div className={styles.filter}>
            {mainButtons.map(btn => (<Filterbutton id={btn.id} key={btn.id} name={btn.name} active={btn.active} toggleButtons={toggleButtons} />))}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mainfilter)