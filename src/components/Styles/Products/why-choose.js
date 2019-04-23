import styled from 'styled-components';

export const WhyChooseStyles = styled.section`
    background-color: #f0ede8;
    display: flex;
    padding: 40px 40px 40px 100px;
    .why-choose-img {
        width: 40%;
        max-width: 500px;
        order: 1;
        img {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .why-choose-copy {
        width: 50%;
        padding-left: 5%;
        max-width: 590px;
        min-width: 375px;
        order: 2;
        ul {
            max-width: 500px;
        }
    }

    @media (max-width: 1260px) {
        padding: 40px;
    }
    @media (max-width: 960px) {
    }
    @media (max-width: 768px) {
        display: block;
        .why-choose-copy {
            padding: 0;
            width: 100%;
        }
        .why-choose-img{
            width: 80%;
            padding-bottom: 40px;
            img {
                position: relative;
                top: 40px;
                transform: none;
            }
        }
    }
    @media (max-width: 640px) {
        padding: 25px;
        .why-choose-copy {
            min-width: 100%;
        }
    }
`;