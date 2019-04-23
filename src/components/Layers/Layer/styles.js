import styled from 'styled-components';

export const LayerStyles = styled.svg`
    width: 419px;
    height: 74px;
    position: absolute;
    right: 0;
    transition: bottom .5s ease, transform .5s ease, opacity .5s ease, visibility .5s ease;
    cursor: pointer;
    top: 17px;

    @media (max-width: 960px) {
        top: 15px;
    }

    @media (max-width: 640px) {
        display: none;
    }
`;