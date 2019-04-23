import React from "react";
import { Link } from "react-router-dom";

const link = (category) => {
    switch(category) {
        case 'Stackers':
            return { src: '', url: '', title: 'Accessories' };
        case 'Cranes':
            return { src: '', url: '', title: 'Accessories' };
        case 'Lift Tables':
            return { src: '', url: '', title: 'Catalog' };
        case 'VRCs':
            return { src: '', url: '', title: 'Catalog' }
        default:
            return '';
    }
}

export const LastLink = ({category}) => {
    if(link !== '' && link !== undefined) {
        const l = new link(category);
        if(l.src !== undefined) {
            return (
                <div className="product-type-link">
                    <Link to={l.url}>
                        <img src={l.src} alt={l.title} />
                        <h4>{`${category.slice(0, -1)} ${l.title}`}</h4>
                    </Link>
                </div>
            )
        }
    }
    return '';
}