import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scale from './scale.jsx';
import './../stylesheets/app.scss'
import NotePicker from './notePicker.jsx';
import { newScale, validateScale, } from './../actions/scaleAction';


const App = ({ getNewScale, validateScale }) =>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    getNewScale() {
        dispatch(newScale());
    },
    validateScale() {
        dispatch(validateScale()).then((inp) => console.log("inp", inp));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);