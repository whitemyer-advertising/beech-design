import styled from 'styled-components';
import ArrowLeftIcon from '../../img/arrow-left-icon.png';
import ArrowDownIcon from '../../img/arrow-down-icon.png';
import { Theme } from '../Styles/theme';

export const LayerListStyles = styled.ul`
    width: 100%;
    min-height: 275px;
    li {
        padding-top: 25px;
        display: flex;
        line-height: 1.45;
        cursor: pointer;
        transition: bottom .5s ease-in;
        position: absolute;
        width: 100%;
        &#label-1 { bottom: 220px; }
        &#label-2 { bottom: 165px; }
        &#label-3 { bottom: 110px; }
        &#label-4 { bottom: 55px; }
        &#label-5 { bottom: 0; }
        &.slideDown {
            transition: bottom .5s ease-out;
            bottom: 0 !important;
            path {
                fill: #e5e5e5 !important;
            }
        }
        div {
            border-bottom: 1px dashed ${Theme.Colors.brightGreen};
            width: 60%;
            &::before {
                content: url(${ArrowLeftIcon});
                padding-right: 10px;
                margin-left: 0;
                transition: margin-left .5s ease-in-out;
            }
        }
        &:hover {
            div {
                margin-left: 25px;
                transition: margin-left .5s ease-in-out;
            }
            svg {
                transform: scale3d(.9, 1.1, 1);
            }
        }
    }

    @media screen and (min-width: 1800px) {
        li div {
            width: 68%;
        }
    }

    @media screen and (max-width: 640px) {
        min-height: auto;
        li {
            position: relative;
            transition: margin .5s ease;
            font-size: 20px;
            padding: 15px 20px;
            background: ${Theme.Colors.green};
            margin-bottom: 3px;
            width: auto;
            &#label-1, &#label-2, &#label-3, &#label-4, &#label-5 {
                bottom: 0;
            }
            div {
                border: none;
            }
            &.expanded {
                margin-bottom: 455px;
                div::before {
                    content: url(${ArrowDownIcon}) !important;
                    vertical-align: text-bottom;
                }
            }
            &:hover {
                div {
                    margin-left: 0;
                }
            }
        }
    }
`;