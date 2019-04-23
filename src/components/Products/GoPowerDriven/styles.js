import styled from 'styled-components';

export const PowerDrivenStyles = styled.div`
    display: flex;
    padding: 10px 10px 25px 10px;
    background-color: #e5e5e5;
    margin-top: 40px;
    max-width: 500px;
    .go-power-driven-img {
        position: absolute;
        left: 10px;
        width: 144px;
        top: -20px;
    }
    .go-power-driven-copy {
        width: 325px;
        left: 165px;
        h4 {
            font-weight: 400;
        }
    }

    @media (max-width: 640px) {
        max-width: 100%;
        .go-power-driven {
            width: 100%;
        }
        .go-power-driven-img {
            width: 110px;
            top: -10px;
            left: 0;
        }
        .go-power-driven-copy {
            left: 110px;
            width: calc(100% - 110px);
            h4 {
                font-size: 16px;
            }
        }
    }

    @media (max-width: 440px) {
        .go-power-driven-img {
            width: 80px;
            top: 0;
        }
        .go-power-driven-copy {
            left: 80px;
            width: calc(100% - 80px);
        }
    }
`;