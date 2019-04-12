import React from 'react';
import MainMenu from './mainMenu.jsx';

export const Template = ({children}) => 
    <div className="page">
        <MainMenu />
        {children}
    </div>

