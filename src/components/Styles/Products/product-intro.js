import styled from 'styled-components';

export const ProductIntroStyles = styled.section`
    padding: 40px 0 40px 100px;
    .product-copy-cont {
        display: flex;
        .product-copy {
            width: 55%;
            max-width: 870px;
            .shortcut-nav {
                display: flex;
                margin-bottom: 20px;
                & > div {
                    margin-right: 20px;
                }
                a {
                    background: #E5DCCA;
                    color: #736e63;
                    width: 240px;
                    padding: 10px;
                    line-height: unset;
                    text-align: center;
                }
            }
            h3 {
                font-weight: 600;
                color: #1c4220;
            }
            p {
                max-width: 640px;
            }
        }
        .product-copy + div {
            margin-left: 10%;
            width: auto;
            max-width: 400px;
        }
    }
    .product-options {
        h2 {
            margin-top: 25px;
            color: #1c4220;
        }
    }

    @media (max-width: 1260px) {
        padding: 40px;
    }
    @media (max-width: 960px) {
    }
    @media (max-width: 768px) {
        .product-copy-cont {
            display: block;
            .product-copy {
                width: 100%;
                max-width: none;
                p {
                    max-width: none;
                }
            }
            .product-copy + div {
                top: 40px;
                margin: 0 auto;
            }
        }
    }
    @media (max-width: 640px) {
        padding: 25px;
        .product-copy-cont {
            .product-copy + div {
                top: 25px;
            }
        }
    }
`;