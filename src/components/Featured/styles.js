import styled from 'styled-components';

export const FeaturedStyles = styled.section`
    display: flex;
    justify-content: space-between;
    .img-cont {
        width: 30%;
        img {
            width: auto;
            height: 100%;
        }
    }
    .featured-product-copy {
        width: 70%;
        p {
            margin-bottom: 40px;
        }
    }
    @media (min-width: 1801px) {
        .img-cont {
            width: 20%;
        }
        .featured-product-copy {
            width: 80%;
        }
    }

    @media (max-width: 640px) {
        display: block;
        .img-cont {
            text-align: center;
        }
        .img-cont, .featured-product-copy {
            width: 100%;
        }
    }
`;