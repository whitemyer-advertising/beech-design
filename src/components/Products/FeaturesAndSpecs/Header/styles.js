import styled from 'styled-components';

export const HeaderStyles = styled.section`
    background: linear-gradient(to bottom, #122f15 0%,#122f15 66%,transparent 100%);
    padding: 40px 100px 0;
    min-height: 145px;
    z-index: 1;
    top: 0;
    position: absolute;
    width: 100%;
    right: 0;
    left: 0;
    @media (max-width: 1260px) {
        padding: 40px 40px 0 40px;
        width: calc(100% - 80px);
    }
    @media (max-width: 960px) {
    }
    @media (max-width: 640px) {
        padding: 25px 25px 0 25px;
        width: calc(100% - 50px);
    }
`;