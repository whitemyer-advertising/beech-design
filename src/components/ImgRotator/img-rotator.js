import React from "react";
import { RotatorStyles } from './styles';
import StackersImg from '../../img/img-rotator/img-1.png';

export const ImgRotator = () => (
    <RotatorStyles>
        <div id="content-slider">
            <div id="slider">
                <div id="mask">
                    <img src={StackersImg} alt="Stackers"/>
                    <img src={StackersImg} alt="Stackers"/>
                    <img src={StackersImg} alt="Stackers"/>
                    <img src={StackersImg} alt="Stackers"/>
                </div>
                <div className="progress-bar"></div>
            </div>
        </div>
    </RotatorStyles>
)