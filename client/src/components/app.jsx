import React from 'react';
import { connect } from 'react-redux';
import Scale from './scale.jsx';
import './../stylesheets/app.scss'
import { Route, Switch } from 'react-router-dom';
import MainMenu from './mainMenu.jsx';


const App = () => {

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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);