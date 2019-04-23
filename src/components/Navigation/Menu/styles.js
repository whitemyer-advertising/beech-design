import styled from 'styled-components';
import { Theme } from '../../Styles/theme';

export const MenuStyles = styled.div`
    height: 100%;
    width: 15%;
    position: fixed;
    z-index: 10;
    top: 0;
    background: #fff;
    background: linear-gradient(to bottom, ${Theme.Colors.tan} 0%,#ffffff 15%);
    border-right: 1px solid #000;
    box-shadow: 0 9px 0px 0px transparent, 0 -9px 0px 0px transparent, 10px 0 15px -4px rgba(0, 0, 0, 0.2), 0 0 0 -4px transparent;
    .menu-logo {
        padding: 15px;
    }
    ul {
        padding: 0 25px;
        z-index: 10;
        li {
            padding: 25px 0;
            a, label {
                color: ${Theme.Colors.green};
                font-weight: 600;
                cursor: pointer;
            }
            img {
                width: 13px;
                margin-left: 10px;
            }
        }
    }
    &.extended {
        visibility: visible;
        opacity: 1;
    }

    @media (min-width: 1801px) {
        width: 10%;
    }

    @media (min-width: 1500px) and (max-width: 1800px) {
        width: 13%;
    }

    @media (max-width: 1260px) {
        width: 18%;
    }

    @media (max-width: 960px) {
        opacity: 0;
        visibility: hidden;
        transition: .5s ease-in-out;
        width: 100%;
        .menu-logo {
            visibility: hidden;
            width: 65px;
        }
        ul li {
            a, label {
                font-size: 24px;
            }
        }
    }
`;