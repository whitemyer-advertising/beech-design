import styled from 'styled-components';

export const IsActiveStyles = styled.div`
    margin: 25px 0;
    input {
        display: none;
    }
    label {
        color: #d7caa8;
        font-size: 18px;
        cursor: pointer;
        &.active {
            color: #00ff13;
        }
    }
    #featureSelect:checked + label {
        color: #00ff13;
    }
    #specSelect:checked + label {
        color: #00ff13;
    }
    span {
        margin: 0 10px;
        color: #d7caa8;
        font-size: 18px;
    }
    @media (max-width: 1260px) {
    }
    @media (max-width: 960px) {
    }
    @media (max-width: 768px) {
    }
`;