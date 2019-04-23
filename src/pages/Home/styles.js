import styled from 'styled-components';
import HeaderOverlay from '../../img/header-overlay.png';

export const HomeStyles = styled.div`
    background: #061207 url(${HeaderOverlay}) no-repeat top center;
    background-size: 100%;
    color: #fff;
    overflow: hidden;
    .home-copy {
        display: inline-block;
        vertical-align: top;
        width: 540px;
        margin-left: 40px;
    }
    @media (min-width: 1801px) {
        background-size: 100% 40%;
    }
    @media (max-width: 1260px) {
        .home-copy {
            margin-left: 25px;
            width: 510px;
        }
    }
    @media (max-width: 960px) {
        .home-intro-copy p {
            width: 465px;
        }
        .home-copy {
            width: 470px;
        }
    }
    @media (max-width: 768px) {
        .home-copy {
            margin-left: 0;
        }
    }
    @media (max-width: 640px) {
        .home-intro-copy p {
            width: 100%;
        }
        .home-copy {
            width: 100%;
            margin-left: 0;
        }
    }
`;