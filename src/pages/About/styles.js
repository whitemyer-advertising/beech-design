import styled from 'styled-components';

export const AboutStyles = styled.div`

    @media (max-width: 1260px) {
    }
    @media (max-width: 960px) {
    }
    @media (max-width: 768px) {
    }
    height: calc(100vh - 390px);
    min-height: fit-content;
    padding: 20px;
    background-color: #1C4220;

    h1 {
        color: white;
    }

    hr {
        max-width: 1000px;
    }

    #wrapper{
        max-width: 1000px;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        position: relative;
        margin: 0 auto;
    }

    p {
        border-radius: 3px;
        box-shadow: 0px 7px 7px #333;
        background-color: #E5DCCA;
        padding: 10px;
    }
`;