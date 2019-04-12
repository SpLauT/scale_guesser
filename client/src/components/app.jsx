import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import Scale from './scale.jsx';
import { AppContext } from './../contexts/appContext';


const App = ({state}) => {

    console.log(state);

    return (
        <Scale />
    );
}

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);