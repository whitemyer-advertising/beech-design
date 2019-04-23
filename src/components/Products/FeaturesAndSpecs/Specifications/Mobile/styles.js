import styled from 'styled-components';

export const MobileSpecTableStyles = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .single-spec {
            max-height: 170px;
            overflow: hidden;
            margin: 15px 0;
            width: 45%;
            border: 1px solid #000;
            transition: max-height .25s ease-out;
            &.expanded {
                max-height: 500px;
                overflow: auto;
                transition: max-height .25s ease-in;
                .header h4 {
                    color: #00ff13;
                }
            }
            .header {
                padding: 10px;
                background: #122f15;
                display: flex;
                justify-content: space-between;
                align-items: center;
                min-height: 47px;
                h4 {
                    color: #fff;
                    margin: 0;
                    font-weight: 600;
                }
                .expand-icon {
                    p {
                        font-size: 12px;
                        color: #e5dcca;
                        margin: 0;
                        vertical-align: middle;
                        display: inline-block;
                    }
                    img {
                        display: inline-block;
                        width: 43px;
                        margin-left: 15px;
                        vertical-align: middle;
                    }
                }
            }
            table {
                width: 100%;
                tr:nth-child(2n) {
                    background: #e5e5e5;
                }
                td {
                    font-size: 16px;
                    padding: 5px 10px;
                    &:first-child {
                        font-weight: 600;
                        padding-right: 0;
                    }
                    &:last-child {
                        text-align: right;
                        padding-left: 0;
                    }
                }
            }
        }
    @media (max-width: 1200px) {
        .single-spec:nth-child(odd) {
            margin-left: 40px;
        }
    }
    @media (max-width: 960px) {
        justify-content: space-between;
    }
    @media (max-width: 768px) {
        .single-spec {
            width: 70%;
            margin: 15px auto;
            &:nth-child(odd) {
                margin-left: auto;
            }
        }
    }
    @media (max-width: 640px) {
        .single-spec {
            width: 90%;
        }
    }
`;