import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../../img/logo.png';
import { BackButton } from '../../back-button';
import { MenuLinks } from '../MenuLinks/menu-links';
import { SubMenuStyles } from './styles';

export const SubMenu = ({inputId, hideSub, hideAll}) => (
    <SubMenuStyles>
        <input type="radio" id={inputId} name="menuRadio" />
        <div className="sub-menu">
            <div className="menu-logo">
                <Link to="/"><img src={Logo} alt="Beech Design Logo" /></Link>
            </div>
            <BackButton backFor={inputId} handleClick={hideSub} />
            <ul>
                <MenuLinks for={inputId} url="/about" name="Our Team" close={hideAll} />
            </ul>
        </div>
    </SubMenuStyles>
)