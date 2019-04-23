import styled from 'styled-components';
import GridBG from '../../../img/products/stackers/models/documentation.png';

export const DocumentationStyles = styled.section`
    padding: 40px 0 40px 100px;
    background: url(${GridBG}) no-repeat top left;
    background-size: cover;
    overflow: hidden;
    .links-col {
        width: 420px;
        display: inline-block;
        vertical-align: top;
        margin-right: 100px;
        &.second {
            margin-right: 0;
        }
    }
    @media (max-width: 1260px) {
        padding: 40px;
        .links-col {
            margin-right: 40px;
            width: 330px;
        }
    }
    @media (max-width: 960px) {
        .links-col {
            margin-right: 25px;
        }
    }
    @media (max-width: 768px) {
        .links-col {
            margin: 40px auto 0 auto;
            display: block;
            &.second {
                margin: 0 auto;
            }
        }
    }
    @media (max-width: 640px) {
        padding: 25px;
        .links-col {
            width: 100%;
        }
    }
`;