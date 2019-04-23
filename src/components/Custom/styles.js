import styled from 'styled-components';
import CustomBackground from '../../img/custom-bg.jpg';

export const CustomStyles = styled.section`
    background: url(${CustomBackground}) no-repeat top center;
    background-size: 100% 100%;
    .custom-cont {
        padding-bottom: 0;
        display: flex;
        justify-content: space-between;
    }
    .img-cont {
        width: 50%;
    }
    .custom-built-copy {
        width: 45%;
        .wrapper {
            width: 380px;
            p {
                margin-bottom: 40px;
            }
        }
    }

    @media (min-width: 1801px) {
        .img-cont {
            width: 40%;
        }
        .custom-built-copy {
            width: 55%;
        }
    }

    @media (max-width: 1260px) {
        min-height: 374px;
        .img-cont {
            width: 40%;
        }
        .custom-built-copy {
            width: 60%;
            .wrapper {
                width: 430px;
            }
        }
    }

    @media (max-width: 960px) {
        min-height: 320px;
        .wrapper {
            width: 335px;
        }
    }

    @media (max-width: 768px) {
        .custom-built-copy {
            .wrapper {
                width: 365px;
            }
        }
    }

    @media (max-width: 640px) {
        min-height: 710px;
        background-size: 170% 40%;
        background-position: left bottom;
        .custom-cont {
            display: block;
        }
        .img-cont, .custom-built-copy {
            width: 100%;
        }
        .custom-built-copy .wrapper {
            width: 100%;
        }
    }

    @media (max-width: 560px) {
        min-height: 675px;
        background-size: 200% 50%;
    }

    @media (max-width: 460px) {
        min-height: 620px;
    }
`;