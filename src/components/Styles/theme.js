import styled from 'styled-components';

const Colors = {
    darkGreen: '#122f15',
    green: '#1C4220',
    brightGreen: '#00ff1b',
    darkTan: '#736e63',
    tan: '#E5DCCA',
    lightTan: '#f0ede8'
}

const VideoCont = styled.div`
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

const Rule = styled.hr`
    border-top: 1px solid #00ff1b;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    width: 400%;
    overflow: hidden;
`;

export const Theme = {
    Colors: Colors,
    VideoCont: VideoCont,
    Rule: Rule
}