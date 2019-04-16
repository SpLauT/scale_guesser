import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scale from './scale.jsx';
import './../stylesheets/app.scss'
import { Route, Switch } from 'react-router-dom';
import MainMenu from './mainMenu.jsx';
import NotePicker from './notePicker.jsx';
import { newScale, validateScale, } from './../actions/scaleAction';

class App extends Component {

    constructor(props) {
        super(props);
        this.store = props.store;
        this.getNewScale = props.getNewScale;
        this.validateScale = props.validateScale;
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <Switch>
                <Route exact path="/(major)?" component={() => (
                    <div className="app">
                        <div>
                            <MainMenu />
                            <Scale />
                        </div>
                        <div>
                            <NotePicker />
                        </div>
                        <div>
                            <p onClick={() => this.getNewScale()}>Get a new Scale</p>
                            <p onClick={() => this.validateScale()}>Validate scale</p>
                        </div>
                    </div>
                )} />
            </Switch >
        );
    }
}

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