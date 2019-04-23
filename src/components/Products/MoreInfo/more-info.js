import React from "react";
import { Link } from 'react-router-dom';
import { MoreInfoStyles } from "./styles";
import PhoneEmailIcon from '../../../img/products/stackers/models/phone-email-icon.png';

export const MoreInfo = () => (
    <MoreInfoStyles>
        <img src={PhoneEmailIcon} alt="Phone & Email Icon" />
        <div className="copy">
            <h4>For More Information</h4>
            <Link to="/contact">Request a Quote</Link>
            <p>or Call Now: (800) 726-9491</p>
        </div>
    </MoreInfoStyles>
)