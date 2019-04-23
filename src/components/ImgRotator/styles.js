import './animations.css';
import styled from 'styled-components';

export const RotatorStyles = styled.div`
    margin:0 auto;
    overflow:hidden;
    width:280px;
    display: inline-block;
    #content-slider {
        #slider {
            box-shadow:1px 1px 5px rgba(0,0,0,0.7);
            height:222px;
            width:100%;
            overflow:visible;
            position:relative;
            #mask {
                overflow:hidden;
                height:222px;
                margin:0;
                padding:0;
                position:relative;
                img {
                    position: absolute;
                    left: 0;
                    animation-name: fadeInOut;
                    animation-timing-function: ease-in-out;
                    animation-iteration-count: infinite;
                    animation-duration: 10s;
                    &:nth-of-type(1) {
                        animation-delay: 0s;
                    }
                    &:nth-of-type(2) {
                        animation-delay: 2s;
                    }
                    &:nth-of-type(3) {
                        animation-delay: 4s;
                    }
                    &:nth-of-type(4) {
                        animation-delay: 6s;
                    }
                }
            }
        }
    }
    @media (max-width: 1260px) {
        width: 175px;
        #content-slider {
            #slider {
                height: 175px;
                #mask {
                    height: 175px;
                }
            }
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`;