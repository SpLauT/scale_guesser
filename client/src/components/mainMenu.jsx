import React from 'react';
import { NavLink } from 'react-router-dom';
import './../stylesheets/mainMenu.scss';

const MainMenu = () =>
    <nav class="main-menu">
        <NavLink to="/">
            GoHome
        </NavLink>
        <NavLink to="/major">Major</NavLink>
    </nav>

export default MainMenu;