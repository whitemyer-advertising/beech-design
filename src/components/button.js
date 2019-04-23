import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Theme } from './Styles/theme';

const ButtonStyle = styled(Link)`
    background-color: ${Theme.Colors.green};
    border: 1px solid #fff;
    padding: 10px 15px;
    color: ${Theme.Colors.tan};
    font-size: 18px;
    @media (max-width: 1260px) {
        font-size: 16px;
    }
`;

export const Button = ({url, label}) => (
    <ButtonStyle to={url}>{label}</ButtonStyle>
);