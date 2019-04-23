import styled from 'styled-components';
import CompanyBackground from '../../img/green-bg-with-logo.jpg';
import { Theme } from '../Styles/theme';

export const CompanyStyles = styled.section`
    background-color: ${Theme.Colors.green};
    background: url(${CompanyBackground}) no-repeat top right;
    background-size: cover;
    color: ${Theme.Colors.tan};
    .wrapper {
        margin: 0 auto;
        padding: 0;
        h2, p {
            margin: 0 auto;
            width: 700px;
            text-align: center;
            padding: 40px 0;
        }
        p {
            padding-bottom: 50px;
            a {
                color: ${Theme.Colors.tan};
                text-decoration: underline;
            }
        }
        .button-cont {
            text-align: center;
            padding-bottom: 50px;
        }
    }
    @media (max-width: 960px) {
        .wrapper h2, .wrapper p {
            width: 615px;
        }
    }

    @media (max-width: 768px) {
        .wrapper h2, .wrapper p {
            width: 560px;
        }
    }

    @media (max-width: 640px) {
        .wrapper h2, .wrapper p {
            width: 100%;
            padding: 25px 0;
        }
        .wrapper p {
            padding-bottom: 35px;
        }
        .wrapper .button-cont {
            padding-bottom: 35px;
        }
    }
`;