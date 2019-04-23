import styled from 'styled-components';
import ListStyleImage from '../../img/diamond-bullet.png';

export const ListStyles = styled.ul`
    max-width: 450px;
    li {
        list-style: square outside url(${ListStyleImage});
        margin-left: 25px;
        font-size: 16px;
        padding-top: 25px;
        font-weight: 600;
    }

    @media (max-width: 1260px) {
    }
    @media (max-width: 960px) {
    }
    @media (max-width: 768px) {
    }
`;