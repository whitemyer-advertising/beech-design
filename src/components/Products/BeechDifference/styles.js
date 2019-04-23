import styled from 'styled-components';
import BeechDifferenceBG from '../../../img/products/stackers/models/beech-difference.png';

export const BeechDifferenceStyles = styled.section`
    padding: 40px 0 9px 100px;
    background: url(${BeechDifferenceBG}) no-repeat top right;
    background-color: #f0ede8;
    min-height: 278px;
    display: flex;
    .copy-cont {
        width: 40%;
        order: 1;
        h2 {
            color: #1c4220;
        }
        .copy {
            width: 455px;
            p {
                margin-top: 25px;
            }
        }
    }
    .img-cont {
        vertical-align: top;
        margin-top: -25px;
        order: 2;
    }
    @media (min-width: 1800px) {
        .copy-cont {
            width: 35%;
        }
    }
    @media (max-width: 1500px) {
        .copy-cont {
            width: 55%;
        }
    }
    @media (max-width: 1260px) {
        padding: 40px;
        max-height: 316px;
    }
    @media (max-width: 1100px) {
        .copy-cont {
            width: 60%;
        }
    }
    @media (max-width: 960px) {
    }
    @media (max-width: 768px) {
        .copy-cont {
            width: 65%;
            .copy {
                width: 370px;
            }
        }
    }
    @media (max-width: 640px) {
        padding: 0;
        display: block;
        background: none;
        background-color: #f0ede8;
        max-height: initial;
        .copy-cont{
            width: calc(100% - 50px);
            padding: 25px;
            .copy {
                width: 100%;
            }
        }
        .img-cont {
            background: url(${BeechDifferenceBG}) no-repeat top right;
            background-size: contain;
            padding: 25px;
            margin: 0;
            text-align: center;
            img {
                width: 175px;
            }
        }
    }
`;