import styled from 'styled-components';
import { Theme } from '../../Styles/theme';

export const NavHeadStyles = styled.div`
    width: 100%;
    height: 65px;
    position: fixed;
    top: 0;
    z-index: 15;
    justify-content: space-between;
    display: none;
    background: linear-gradient(to bottom, ${Theme.Colors.tan} 0%, #ffffff 50%);
    &.see-through {
        background: transparent;
    }
    .menu-icon-cont {
        height: 25px;
        width: 30%;
        text-align: right;
        padding: 25px 25px 0 0;
        .menu-icon {
            width: 40px;
            height: 25px;
            cursor: pointer;
            transform: rotate(0deg);
            transition: .5s ease-in-out;
            margin: 0 0 0 auto;
            span {
                position: absolute;
                width: 100%;
                height: 4px;
                background: ${Theme.Colors.darkTan};
                opacity: 1;
                left: 0;
                transform: rotate(0deg);
                transition: .5s ease-in-out;
                &:nth-child(1) {
                    top: 0;
                }
                &:nth-child(2), &:nth-child(3) {
                    top: 10px;
                }
                &:nth-child(4) {
                    top: 20px;
                }
            }
        }
        .toggle-icon {
            span {
                &:nth-child(1) {
                    top: 10px;
                    width: 0%;
                    left: 50%;
                }
                &:nth-child(2) {
                    transform: rotate(45deg);
                }
                &:nth-child(3) {
                    transform: rotate(-45deg);
                }
                &:nth-child(4) {
                    top: 10px;
                    width: 0%;
                    left: 50%;
                }
            }
        }
    }
    .logo-cont {
        width: calc(50% + 15px);
        img {
            width: 30px;
            display: block;
            margin: 10px 0 0 auto;
        }
        a {
            font-size: 24px;
            color: #fff;
        }
    }

    @media (max-width: 960px) {
        display: flex;
    }
`;