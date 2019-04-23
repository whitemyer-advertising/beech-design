import styled from 'styled-components';

export const Grid = styled.div`
    width: 960px;
    padding: 65px 100px;
    @media (min-width: 1801px) {
        width: 1260px;
    }
    @media (max-width: 1260px) {
        width: 90%;
    }
    @media (max-width: 960px) {
        padding: 40px;
    }
    @media (max-width: 768px) {
        width: calc(100% - 80px);
    }
    @media (max-width: 640px) {
        padding: 25px;
        width: calc(100% - 50px);
    }
`;