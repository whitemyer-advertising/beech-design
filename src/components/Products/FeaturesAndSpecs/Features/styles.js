import styled from 'styled-components';

export const FeatureStyles = styled.div`
    background-color: #000;
    padding-bottom: 40px;
    min-height: 860px;
    .content {
        padding: 160px 0 0 100px;
        .features-list-cont {
            display: flex;
            justify-content: space-between;
            ul {
                color: #fff;
                order: 1;
                li:first-child {
                    padding-top: 0;
                }
            }
            .img-cont {
                order: 2;
                height: 40%;
                right: 20%;
            }
        }
    }
    @media (max-width: 1260px) {
        .content {
            padding: 160px 40px 40px 40px;
            .features-list-cont {
                .img-cont {
                    right: 5%;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .content {
            .features-list-cont {
                .img-cont {
                    right: 0;
                }
            }
        }
    }

    @media (max-width: 640px) {
        .content {
            padding: 160px 25px 25px 25px;
            .features-list-cont {
                display: block;
                ul {
                    max-width: 500px;
                }
                .img-cont {
                    min-width: 30%;
                    max-width: 50%;
                    margin: 0 auto 25px auto;
                }
            }
        }
    }
`;