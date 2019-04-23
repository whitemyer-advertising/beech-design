import React from "react";
import { WhyChooseStyles } from '../../Styles/Products/why-choose';
import StackerVsForkImage from '../../../img/products/stackers/stackers-vs-forklift.png';

export const WhatIsAVRC = () => (
    <WhyChooseStyles>
        <div className="why-choose-copy">
            <h2>What is a Vertical Reciprocating Conveyor?</h2>
            <p>Also known as vertical lifts, vertical material lifts, freight lifts or conveyor lifts, VRCs are a safe and cost-effective means for any application that requires moving material from one elevation to another.</p>
            <p>Vertical reciprocating conveyors are a versatile solution for any material lifting need: they can be driven mechanically or hydraulically, have a straddle or cantilever platform, be surface or pit mounted, installed in an existing shaftway or the exterior of a building, serve the edge of a mezzanine or pass through a floor, and much more.</p>
            <p>Vertical reciprocating conveyors are not elevators and are recognized by their own national code (ANSI/ASME B20.1). This distinction provides a significant cost advantage over an elevator in installation, operation and maintenance. They also provide a much safer and convenient answer to raising loads between levels than using a forklift or personnel carrying loads themselves.</p>
        </div>
        <div className="why-choose-img">
            <img src={StackerVsForkImage} alt="Choose Stacker vs Forklift" />
        </div>
    </WhyChooseStyles>
)