import styled from 'styled-components';

export const AppStyles = styled.div`
    width: 85%;
    right: 0;
    position: absolute;
    top: 0;
    @media (min-width: 1801px) {
        width: 90%;
    }
    @media (min-width: 1500px) and (max-width: 1800px) {
        width: 87%;
    }
    @media (max-width: 1260px) {
        width: 82%;
    }
    @media (max-width: 960px) {
        width: 100%;
        margin-top: 128px;
    }
    @media (max-width: 640px) {
        margin-top: 117px;
    }
`;