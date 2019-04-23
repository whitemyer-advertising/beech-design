import styled from 'styled-components';

export const CategoryIntroStyles = styled.section`
    padding: 40px 0 40px 100px;
    .category-copy-cont {
        display: flex;
        .category-copy {
            width: 55%;
            max-width: 870px;
            .quick-product-nav {
                margin-bottom: 20px;
            }
            h3 {
                font-weight: 600;
                color: #1c4220;
            }
            p {
                max-width: 640px;
            }
        }
        .category-img {
            margin-left: 10%;
            width: auto;
            max-width: 400px;
        }
    }
    .category-options {
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
        .category-copy-cont {
            display: block;
            .category-copy {
                width: 100%;
                max-width: none;
                p {
                    max-width: none;
                }
            }
            .category-img {
                top: 40px;
                margin: 0 auto;
            }
        }
    }
    @media (max-width: 640px) {
        padding: 25px;
        .category-copy-cont {
            .category-img {
                top: 25px;
            }
        }
    }
`;