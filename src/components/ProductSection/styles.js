import styled from 'styled-components';

export const ProductSectionStyles = styled.section`
    padding: 0 0 40px 100px;
    width: 960px;
    .product-details {
        transition: left .5s ease-in;
        position: absolute;
        bottom: 0;
        z-index: 7;
        width: 100%;
        min-height: 275px;
        left: 100px;
        &.hide {
            left: 200%;
            transition: left .5s ease-out;
        }
    }

    @media screen and (min-width: 1800px) {
        width: 1260px;
    }

    @media screen and (max-width: 1260px) {
        width: 90%;
        .product-details {
            left: 40px;
        }
    }

    @media screen and (max-width: 960px) {
        padding: 40px;
    }

    @media screen and (max-width: 768px) {
        width: calc(100% - 80px);
        .product-details {
            width: calc(100% - 80px);
        }
    }

    @media screen and (max-width: 640px) {
        width: calc(100% - 50px);
        padding: 25px;
        .product-details {
            top: 95px;
            left: 25px;
            z-index: 0;
            width: calc(100% - 50px);
            height: 430px;
            &.cranes {
                top: 160px;
            }
            &.lift-tables {
                top: 220px;
            }
            &.vrcs {
                top: 280px;
            }
            &.power-driven {
                top: 345px;
            }
            &.custom-capabilities {
                top: 385px;
            }
        }
    }
`;