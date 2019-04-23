import React from 'react';
import { Link } from 'react-router-dom';
import CallEmailImg from '../../../img/call-email-icon.png';
import PhoneIcon from '../../../img/phone-icon.png';
import { ContactLinkStyles } from './styles';

export const ContactLinks = () => (
    <ContactLinkStyles>
        <h5>
            <img src={CallEmailImg} alt="Call or Email"/>
            <div className="contact-copy">
                <span className="lg-size">Call Now: </span>
                <a href="tel:8007269491">{window.innerWidth > 960 ? '(800) 726-9491' : <img className="phone-icon" src={PhoneIcon} alt="Phone Icon" /> }</a>
                <span className="lg-size"> or </span>
                <Link to="/contact">Request a Quote</Link>
            </div>
        </h5>
    </ContactLinkStyles>
);