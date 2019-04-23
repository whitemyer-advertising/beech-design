import React from "react"
import styled from 'styled-components';
import { ArrowLeft } from './arrow-left';

const ButtonStyles = styled.label`
    padding: 0 0 25px 25px;
    display: block;
    cursor: pointer;
    svg {
        padding-right: 10px;
        width: 10px;
        height: 16px;
    }
    @media (max-width: 768px) {
        font-size: 24px;
        svg {
            height: 22px;
            width: 12px;
        }
    }
`;

export const BackButton = ({backFor, color, handleClick}) => (
    <ButtonStyles htmlFor={backFor} onClick={handleClick}>
        <ArrowLeft setColor={color} />Back
    </ButtonStyles>
);