import React from "react";
import styles from './App.module.css'
import Header from "./components/Header/Header";
import Sidefilter from "./components/Sidefilter/Sidefilter";
import Main from "./components/Main/Main";
import {connect} from "react-redux";
import {getTickets, mainToggle, toggleStops} from "./store/ActionCreators/actionCreators";

function App(props) {

    return (
        <div className={styles.wrapper}>
            <Header/>
            <Sidefilter />
            <Main />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        sideButtons: state.SideReducer.sideButtons,
        mainButtons: state.MainReducer.mainButtons,
        tickets: state.TicketReducer.tickets,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        toggleButtons: id => dispatch(mainToggle(id)),
        toggleStops: id => dispatch(toggleStops(id)),
        sortedStoppages: id => dispatch(sortedStoppages(id)),
        gettingTickets: () => dispatch(getTickets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
