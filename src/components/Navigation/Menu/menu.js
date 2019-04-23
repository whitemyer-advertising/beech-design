import React from 'react';
import { Link } from 'react-router-dom';
import { MenuStyles } from './styles';
import Logo from '../../../img/logo.png';
import Plus from '../../../img/plus-icon.png';

export const Menu = ({toggle}) => (
    <MenuStyles id="menu">
        <div className="menu-logo">
            <Link to="/"><img src={Logo} alt="Beech Design Logo" /></Link>
        </div>
        <ul>
            <li data-link="about"><label htmlFor="about-menu-radio">About<img src={Plus} alt="Plus Icon" /></label></li>
            <li data-link="products"><label htmlFor="products-menu-radio">Products<img src={Plus} alt="Plus Icon" /></label></li>
            <li onClick={toggle}><Link to="/custom">Custom</Link></li>
            <li onClick={toggle}><Link to="/contact">Contact</Link></li>
            <li onClick={toggle}><Link to="/careers">Careers</Link></li>
        </ul>
    </MenuStyles>
);