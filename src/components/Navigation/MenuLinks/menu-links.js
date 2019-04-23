import React from "react";
import { Link } from 'react-router-dom';
import { MenuLinkStyles } from './styles';
import { ArrowRight } from '../../arrow-right';
import { MenuData } from './menu-data';

export class MenuLinks extends React.Component {
    selectMenu() {
        if(this.props.for === 'about-menu-radio') {
            return MenuData.About;
        } else {
            return MenuData.Products;
        }
    }
    render() {
        let menu = this.selectMenu();
        return (
            menu.map((link) =>
                <MenuLinkStyles htmlFor={this.props.for} key={link.id} onClick={this.props.close}>
                    <Link to={link.url}>{link.name}</Link>
                    <ArrowRight />
                </MenuLinkStyles>
            )
        )
    }
}