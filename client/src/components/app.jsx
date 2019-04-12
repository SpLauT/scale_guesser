import React from 'react';
import { connect } from 'react-redux';
import Scale from './scale.jsx';
import { Template } from './templates.jsx';
import './../stylesheets/app.scss'
import { Route, Switch } from 'react-router-dom';
import MainMenu from './mainMenu.jsx'


const App = ({ state }) => {

    console.log(state);

    return (
        <Switch>
            <Route exact path="/" component={() => (
                <div className="app">
                    <MainMenu />
                    <Scale />
                </div>
            )} />
        </Switch>
    );
}

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);