import styled from 'styled-components';
import { Theme } from '../../Styles/theme';

export const ContactLinkStyles = styled.div`
    z-index: 10;
    color: ${Theme.Colors.green};
    background: ${Theme.Colors.tan};
    padding: 10px;
    width: 420px;
    margin: 0 40px 0 auto;
    h5 {
        margin-bottom: 0;
        > img {
            padding-right: 10px;
            width: 35px;
        }
        .contact-copy {
            display: inline-block;
            vertical-align: super;
            a {
                color: ${Theme.Colors.green};
                font-size: 16px;
                font-weight: 600;
                &:last-child {
                    text-decoration: underline;
                }
                .phone-icon {
                    display: none;
                }
            }
        }
    }

    @media (max-width: 960px) {
        padding: 65px 0 0 0;
        width: 100%;
        position: fixed;
        h5 {
            display: flex;
            > img {
                display: none;
            }
            .contact-copy {
                display: flex;
                width: 100%;
                .lg-size {
                    display: none;
                }
                a {
                    border-right: 2px solid #736e63;
                    padding: 10px 25px;
                    font-size: 22px;
                    width: 50%;
                    text-align: center;
                    align-self: center;
                    .phone-icon {
                        width: 40px;
                        margin: 0 auto;
                        display: block;
                    }
                    &:last-child {
                        border: none;
                        text-decoration: none;
                    }
                }
            }
        }
    }

    @media (max-width: 640px) {
        h5 .contact-copy a {
            font-size: 18px;
            padding: 10px 15px;
            .phone-icon {
                width: 30px;
            }
        }
    }
`;