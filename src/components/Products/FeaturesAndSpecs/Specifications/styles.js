import styled from 'styled-components';

export const SpecStyles = styled.div`
    max-width: 960px;
    padding-bottom: 40px;
    min-height: 860px;
    background-color: #fff;
    .content {
        padding: 170px 0 0 100px;
        .ReactTable {
            font-family: quatro, sans-serif;
            font-size: 12px;
            .rt-thead {
                background-color: #112b13;
                color: #fff;
                font-weight: 600;
                .rt-resizable-header {
                    align-self: center;
                }
                .rt-resizable-header-content {
                    white-space: initial;
                    text-align: left;
                }
            }
            .rt-resizer {
                display: none
            }
        }
        hr {
            border: 1px solid #1C4220;
            margin: 25px 0 40px 0;
        }
        .spec-drawing-cont {
            display: flex;
            justify-content: space-between;
            .spec-drawing {
                order: 2;
                width: auto;
            }
            &:last-child {
                top: 20%;
            }
        }
    }
    @media (max-width: 1260px) {
        .content {
            padding: 170px 40px 40px 40px;
        }
    }
    @media (max-width: 960px) {
    }
    @media (max-width: 768px) {
        .content {
            .spec-drawing-cont {
                display: block;
                text-align: center;
                > :last-child {
                    margin: 40px auto 0 auto;
                }
            }
        }
    }
    @media (max-width: 640px) {
        .content {
            padding: 170px 25px 25px 25px;
        }
    }
`;