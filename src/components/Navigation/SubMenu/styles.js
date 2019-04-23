import styled from 'styled-components';
import { Theme } from '../../Styles/theme';

export const SubMenuStyles = styled.div`
    .sub-menu {
        width: 15%;
        visibility: hidden;
        left: 0;
        position: fixed;
        background: ${Theme.Colors.tan};
        height: 100%;
        top: 0;
        transition: all .5s ease;
        z-index: 8;
        border-left: 1px solid ${Theme.Colors.tan};
        ul {
            padding: 0 25px;
        }
        .menu-logo {
            padding: 14px;
            visibility: hidden;
        }
        input {
            display: none;
        }
    }

    #about-menu-radio:checked + .sub-menu,
    #products-menu-radio:checked + .sub-menu {
        visibility: visible;
        left: 15%;
        height: 100%;
    }
    @media (min-width: 1801px) {
        .sub-menu {
            width: 10%;
        }
        #about-menu-radio:checked + .sub-menu,
        #products-menu-radio:checked + .sub-menu {
            left: 10%;
        }
    }

    @media (min-width: 1500px) and (max-width: 1800px) {
        .sub-menu {
            width: 13%;
        }
        #about-menu-radio:checked + .sub-menu,
        #products-menu-radio:checked + .sub-menu {
            left: 13%;
        }
    }

    @media (max-width: 1260px) {
        .sub-menu {
            width: 18%;
        }
        #about-menu-radio:checked + .sub-menu,
        #products-menu-radio:checked + .sub-menu {
            left: 18%;
        }
    }

    @media (max-width: 960px) {
        .sub-menu {
            width: 100%;
            left: -100%;
            z-index: 10;
            .menu-logo {
                width: 125px;
            }
        }
        #about-menu-radio:checked + .sub-menu,
        #products-menu-radio:checked + .sub-menu {
            left: 0;
        }
    }
`;