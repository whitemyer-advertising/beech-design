import React from "react";
import { PDFLinkStyles } from "./styles";
import PDFIcon from '../../img/pdf-icon.png';
import { Link } from 'react-router-dom';

export const PDFLink = ({url, text}) => (
    <PDFLinkStyles>
        <img src={PDFIcon} alt="PDF Icon" />
        <Link to={url} target="_blank">{text}</Link>
    </PDFLinkStyles>
)