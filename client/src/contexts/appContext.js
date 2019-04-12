import React, { Component } from 'react';
import storeFactory from './../store/store';

export const AppContext = React.createContext();

const store = storeFactory();

export class AppProvider extends Component {
    render() {
        return (
            <AppContext.Provider value={store}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}