import styled from 'styled-components';

export const MoreInfoStyles = styled.div`
    width: 346px;
    background: #122f15;
    padding: 15px;
    color: #fff;
    vertical-align: text-bottom;
    margin-top: 25px;
    height: fit-content;
    align-self: center;
    text-align: left;
    img {
        width: auto;
    }
    .copy {
        display: inline-block;
        vertical-align: top;
        margin-left: 15px;
        h4 {
            margin-bottom: 0;
        }
        a {
            color: #fff;
            text-decoration: underline;
        }
        a, p {
            font-size: 18px;
        }
    }
    @media (max-width: 1260px) {
        img {
            width: 20%;
        }
        .copy {
            margin-left: 10px;
        }
    }

    @media (max-width: 640px) {
        width: calc(100% - 30px);
        max-width: 400px;
        .copy {
            a, p {
                font-size: 16px;
            }
        }
    }
`;