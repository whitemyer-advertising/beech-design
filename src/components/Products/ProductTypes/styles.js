import styled from 'styled-components';
import ProductTypesBG from '../../../img/products/stackers/product-types/product-types-bg.jpg';

export const ProductTypesStyles = styled.section`
    background: url(${ProductTypesBG}) no-repeat top center;
    background-size: 100% 100%;
    .product-types {
        padding: 40px 100px;
        h2 {
            color: #fff;
        }
        .product-type-links-cont {
            .product-type-link {
                width: 23%;
                text-align: center;
                display: inline-block;
                vertical-align: top;
                padding-top: 25px;
                padding-right: 2%;
                a {
                    display: block;
                    margin: 0 auto;
                    color: #fff;
                    img {
                        padding: 25px 0;
                        transition: transform .2s ease-in-out;
                    }
                    &:first-child h4, &:nth-child(2) h4 {
                        width: 225px;
                    }
                    h4 {
                        margin: 0 auto;
                        font-size: 16px;
                        height: 54px;
                    }
                    p {
                        width: 200px;
                        margin: 0 auto;
                        font-size: 14px;
                        color: #fff;
                    }
                    &:hover img {
                        transform: scale(1.2, 1.2)
                    }
                }
            }
        }
    }

    @media (max-width: 1260px) {
        .product-types {
            padding: 40px;
            .product-type-links-cont {
                .product-type-link {
                    a {
                        h4 {
                            height: 81px;
                        }
                        &:first-child h4, &:nth-child(2) h4 {
                            width: 155px;
                        }
                        p {
                            width: 155px;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 960px) {
    }
    @media (max-width: 768px) {
        .product-types {
            .product-type-links-cont {
                .product-type-link {
                    width: 31%;
                }
            }
        }
    }
    @media (max-width: 640px) {
        .product-types {
            padding: 25px;
            .product-type-links-cont {
                .product-type-link {
                    width: 47%;
                    padding-right: 3%;
                    a {
                        h4 {
                            width: 140px;
                            font-size: 16px;
                            height: auto;
                            padding-bottom: 10px;
                        }
                        &:first-child h4, &:nth-child(2) h4 {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
`;