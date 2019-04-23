import styled from 'styled-components';

export const PDFLinkStyles = styled.div`
    margin: 24px 0;
    img {
        display: inline-block;
        width: auto;
    }
    a {
        display: inline-block;
        background-color: #1c4220;
        vertical-align: top;
        padding: 9px 14px;
        margin-left: 6px;
        color: #e4dcca;
        width: 345px;
    }
    @media (max-width: 1260px) {
        a {
            width: 260px;
        }
    }
    @media (max-width: 768px) {
        &:first-child {
            margin-top: 0;
        }
    }

    @media (max-width: 640px) {
        a {
            width: calc(100% - 70px);
        }
    }
`;