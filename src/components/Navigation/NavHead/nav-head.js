import React from 'react';
import { Link } from 'react-router-dom';
import CompassLogo from '../../../img/compass-logo-dark.png';
import { NavHeadStyles } from './styles';

export const NavHead = ({toggle}) => (
    <NavHeadStyles id="nav-head">
        <div className="logo-cont">
            <Link to="/"><img src={CompassLogo} alt="Beech Design Logo" /></Link>
        </div>
        <div className="menu-icon-cont">
            <div className="menu-icon" onClick={toggle}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </NavHeadStyles>
);