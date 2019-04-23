import React from 'react';
import { ContactLinks } from './ContactLinks/contact-links';
import { NavHead } from './NavHead/nav-head';
import { Menu } from './Menu/menu';
import { SubMenu } from './SubMenu/sub-menu';
import { NavStyles } from './styles';

export class Navigation extends React.Component {
    toggleMenu = () => {
        var menu = document.querySelector('#menu');
        document.querySelector('.menu-icon').classList.toggle('toggle-icon');
        menu.classList.toggle('extended');
        if(menu.classList.contains('extended')) {
            document.querySelector('#nav-head').classList.add('see-through');
        } else {
            document.querySelector('#nav-head').classList.remove('see-through');
        }
    }
    
    hideAllMenus = (el) => {
        this.props.hide(el);
        if (window.innerWidth < 961) {
            this.toggleMenu();
        }
    }

    render() {
        return (
            <NavStyles>
                <ContactLinks />
                <NavHead toggle={this.toggleMenu} />
                <Menu toggle={this.toggleMenu} />
                <SubMenu inputId="about-menu-radio" hideSub={this.props.hide} hideAll={this.hideAllMenus} />
                <SubMenu inputId="products-menu-radio" hideSub={this.props.hide} hideAll={this.hideAllMenus} />
            </NavStyles>
        )
    }
}