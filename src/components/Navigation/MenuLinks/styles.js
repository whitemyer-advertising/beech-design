import styled from 'styled-components';
import { Theme } from '../../Styles/theme';

export const MenuLinkStyles = styled.li`
    border-top: 1px solid #fff;
    padding-top: 0;
    cursor: pointer;
    &:last-child {
        border-bottom: 1px solid #fff;
    }
    a {
        color: ${Theme.Colors.green};
        font-weight: 600;
        padding: 25px 0;
        display: block;
    }
    svg {
        position: absolute;
        right: 0;
        width: 10px;
        height: 16px;
        bottom: 32px;
        use {
            fill: #fff;
        }
    }

    @media (max-width: 960px) {
        label, a {
            font-size: 24px;
        }
    }
`;