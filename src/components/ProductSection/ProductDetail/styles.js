import styled from 'styled-components';
import { Theme } from '../../Styles/theme';

export const ProductStyles = styled.div`
    display: none;
    justify-content: space-between;
    border-left: 14px solid ${Theme.Colors.green};
    .product-detail-copy {
        width: 45%;
        margin-left: 25px;
        .wrapper {
            width: 300px;
            h4 {
                color: ${Theme.Colors.brightGreen};
            }
            p {
                margin-bottom: 40px;
            }
        }
    }
    .img-cont {
        width: 40%;
        max-height: 287px;
        align-self: flex-end;
        img {
            height: 100%;
            width: auto;
        }
    }

    @media screen and (min-width: 1801px) {
        .img-cont {
            width: 30%;
        }
    }

    @media screen and (max-width: 1260px) {
        .product-detail-copy {
            width: 40%;
        }
        .img-cont {
            width: 35%;
        }
    }

    @media screen and (max-width: 960px) {
        .product-detail-copy {
            margin-left: 25px;
            .wrapper {
                width: 265px;
            }
        }
        .img-cont {
            width: 45%;
        }
    }

    @media screen and (max-width: 768px) {
        .product-detail-copy {
            width: 45%;
        }
        .img-cont {
            width: 50%;
        }
    }

    @media screen and (max-width: 640px) {
        border: none;
        .product-detail-copy {
            width: calc(100% - 20px);
            margin-left: 0;
            .wrapper {
                width: 100%;
                h2 {
                    display: none;
                }
            }
        }
        .img-cont {
            top: 30px;
            img {
                width: 160px;
            }
        }
    }
`;