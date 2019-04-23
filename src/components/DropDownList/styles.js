import styled from 'styled-components';
import DropDownArrow from '../../img/dropdown-arrow.png';

export const DropDownListStyles = styled.div`
    width: 300px;
    select {
        background: url(${DropDownArrow}) calc(100% - 10px) / auto no-repeat #E5DCCA;;
        appearance: none;
        border-radius: 0;
        border: 0;
        font-size: 20px;
        color: #736e63;
        width: 100%;
        padding: 10px;
        position: relative;
        &:focus {
            outline: 0;
        }
        &::-ms-expand {
            display: none;
        }
    }
    @media (max-width: 1260px) {
    }
    @media (max-width: 960px) {
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;