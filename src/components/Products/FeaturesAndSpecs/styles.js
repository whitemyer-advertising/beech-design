import styled from 'styled-components';

export const FeaturesAndSpecsStyles = styled.section`
    .slide-label {
        position: absolute;
        padding: 15px;
        background: #122f15;
        top: 300px;
        width: 208px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        border: none;
        z-index: 1;
        cursor: pointer;
        &:focus {
            outline: 0;
        }
        svg {
            width: 11px;
            display: block;
            margin: 5px auto;
            height: 19px;
        }
        &.specs {
            right: 38px;
            transform-origin: right;
            transform: rotate(-90deg);
            svg {
                transform: rotate(90deg);
            }
        }
        &.features {
            left: 38px;
            transform-origin: left;
            transform: rotate(90deg);
            svg {
                transform: rotate(-90deg);
            }
        }
    }
    
    .slide-in-left-enter {
        transform: translate(250%);
        .slide-label {
            opacity: 1;
        }
    }
    .slide-in-left-enter.slide-in-left-enter-active {
        transform: translate(0%);
        transition: transform 600ms ease-in-out;
    }
    .slide-in-left-exit {
        transform: translate(0%);
    } 
    .slide-in-left-exit.slide-in-left-exit-active {
        transform: translate(250%);
        transition: transform 600ms ease-in-out;
        position: absolute;
        width: 100%;
        top: 0;
        .slide-label {
            opacity: 0;
        }
    }

    .slide-in-right-enter {
        transform: translate(-100%);
        .slide-label {
            opacity: 1;
        }
    }
    .slide-in-right-enter.slide-in-right-enter-active {
        transform: translate(0%);
        transition: transform 600ms ease-in-out;
    }
    .slide-in-right-exit {
        transform: translate(0%);
    }
    .slide-in-right-exit.slide-in-right-exit-active {
        transform: translate(-100%);
        transition: transform 600ms ease-in-out;
        position: absolute;
        width: 100%;
        top: 0;
        .slide-label {
            opacity: 0;
        }
    }

    @media (max-width: 1260px) {
    }
    @media (max-width: 960px) {
    }
    @media (max-width: 768px) {
        .slide-label {
            display: none;
        }
    }
`;