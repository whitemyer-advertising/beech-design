import styled from 'styled-components';

export const ModelSelectionStyles = styled.section`
    display: flex;
    padding: 40px 40px 40px 100px;
    .select-right-model-img {
        width: 40%;
        max-width: 500px;
        img {
            max-width: 460px;
        }
    }
    .select-right-model-copy {
        width: 50%;
        padding-right: 5%;
        max-width: 590px;
        min-width: 385px;
        ul {
            margin-bottom: 20px;
            margin-top: 20px;
            li:first-child {
                padding-top: 0;
            }
        }
    }

    @media (max-width: 1260px) {
        padding: 40px;
        .select-right-model-img {
            img {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
    @media (max-width: 960px) {
    }
    @media (max-width: 768px) {
        display: block;
        .select-right-model-copy {
            padding: 0;
            width: 100%;
        }
        .select-right-model-img {
            width: 80%;
            padding-bottom: 40px;
            img {
                position: relative;
                transform: none;
                top: 40px;
            }
        }
    }
    @media (max-width: 640px) {
        padding: 25px;
        .select-right-model-copy {
            min-width: 100%;
        }
    }
`;