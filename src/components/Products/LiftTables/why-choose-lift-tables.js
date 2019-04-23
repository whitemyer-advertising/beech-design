import React from "react";
import { WhyChooseStyles } from '../../Styles/Products/why-choose';
import StackerVsForkImage from '../../../img/products/stackers/stackers-vs-forklift.png';
import { ListStyles } from '../../Styles/list';

export const WhyChooseLiftTables = () => (
    <WhyChooseStyles>
        <div className="why-choose-copy">
            <h2>Why choose a lift or tilt table?</h2>
            <p>Lift tables use a scissors mechanism to raise or lower materials.  They can be relatively easily adapted to perform a variety of different tasks, and are commonly used for work positioning or pallet handling.  In work positioning applications, lift tables correctly reposition work at a suitable height for operators, maximizing worker productivity and providing an ergonomically friendly workplace.</p>
            <p>Allow workers to position tasks within a comfortable range of movement.</p>
            <p>Tilt tables allow the load to be tilted toward the operator, placing the load within easy reach and limiting stretching and bending.</p>
            <p>Typical applications include:</p>
            <ListStyles>
                <li>Work positioning</li>
                <li>Ergonomic handling</li>
                <li>Materials positioning in machine feeding applications</li>
                <li>Pallet or roll cage handling</li>
            </ListStyles>
        </div>
        <div className="why-choose-img">
            <img src={StackerVsForkImage} alt="Choose Stacker vs Forklift" />
        </div>
    </WhyChooseStyles>
)