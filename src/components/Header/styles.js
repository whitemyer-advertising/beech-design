import styled from 'styled-components';

export const HeaderStyles = styled.div`
    background: ${props => `url(${props.background}) no-repeat top right`};
    background-size: cover;
    min-height: 175px;
    h1 {
        font-size: 80px;
        color: #fff;
    }

    @media (max-width: 960px) {
        min-height: 170px;
    }

    @media (max-width: 640px) {
        min-height: 100px;
        h1 {
            font-size: 50px;
            margin: 0;
        }
    }
`;