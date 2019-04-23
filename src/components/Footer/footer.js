import React from "react";
import { FooterStyles } from "./styles.js";
import CompassLogo from '../../img/compass-logo-dark.png';
import MillerStudioLogo from '../../img/miller-studio-logo.png';

export const Footer = () => (
    <FooterStyles>
        <div className="logo-cont">
            <img src={CompassLogo} alt="Logo" />
        </div>
        <div className="footer-contact">
            <p>
                642 Wabash Avenue, NW • PO Box 947• New Philadelphia, Ohio 44663<br/>
                <a href="mailto:info@beech-design.com">info@beech-design.com</a> • <a href="tel:8007269491">(800) 726-9491</a>
            </p>
        </div>
        <div className="footer-copyright">
            <p>
                All products ship from our two manufacturing facilities in New Philadelphia, Ohio<br />
                © 2019 Beech Design & Manufacturing
            </p>
        </div>
        <div className="footer-company-division">
            <p>A Division of</p>
            <a href="http://www.miller-studio.com" target="_blank" rel="noopener noreferrer">
                <img src={MillerStudioLogo} alt="Miller Studio Logo" />
            </a>
        </div>
    </FooterStyles>
)