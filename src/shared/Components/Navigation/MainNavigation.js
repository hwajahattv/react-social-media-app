import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';

import './MainNavigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import BackDrop from '../UIelements/Backdrop/Backdrop';
function MainNavigation(props) {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const openDrawer = () => {
        setSideDrawerOpen(true);
    };
    const closeDrawer = () => {
        setSideDrawerOpen(false);
    };
    return (
        <React.Fragment>
            {sideDrawerOpen ? <BackDrop onClick={closeDrawer} /> : null};
            <SideDrawer show={sideDrawerOpen} onClick={closeDrawer}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={openDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className='main-navigation__title'>
                    <Link to="/">
                        Your Places
                    </Link></h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation