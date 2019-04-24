import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scale from './scale.jsx';
import './../stylesheets/app.scss'
import NotePicker from './notePicker.jsx';
import { newScale, validateScale, findNewPosition } from './../actions/scaleAction';


const App = ({ getNewScale, validateScale, scale, position, setPosition }) => {
    if(!scale){
        getNewScale();
    }
    if(!position && scale){
        setPosition();
    }
    return (
        <main>
            <section id="content-area">
                <Scale />
                <NotePicker />
            </section>
            <section id="button-panel">
                <span onClick={() => getNewScale()}>Get a new Scale</span>
                <span onClick={() => validateScale()}>Validate scale</span>
            </section>
        </main>
    )
}


const mapStateToProps = state => ({
    scale: state.toGuess && state.toGuess,
    position: state.position && state.position
});

const mapDispatchToProps = dispatch => ({
    getNewScale() {
        dispatch(newScale());
    },
    validateScale() {
        dispatch(validateScale());
    },
    setPosition() {
        dispatch(findNewPosition());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);