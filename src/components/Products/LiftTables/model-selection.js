import React from "react";
import { ModelSelectionStyles } from "../../Styles/Products/model-selection";
import { ListStyles } from '../../Styles/list';
import SelectRightModelImage from '../../../img/products/stackers/select-right-model.jpg';

export const ModelSelection = () => (
    <ModelSelectionStyles>
        <div className="select-right-model-copy">
            <h2>How to select the right model</h2>
            <p>Many factors come into play, but to get started, the following criteria are important in determining the type of lift table that will best serve your needs:</p>
            <ListStyles>
                <li>What is your load capacity</li>
                <li>Do you need to transport loads from one workstation or location to another</li>
                <li>Do the materials need to be at an angle for the worker</li>
            </ListStyles>
            <p>Explore our many lift and tilt table options to see which Beech LoadRedi™ model is right for your material handling needs.</p>
        </div>
        <div className="select-right-model-img">
            <img src={SelectRightModelImage} alt="Selecting the right Lift Table" />
        </div>
    </ModelSelectionStyles>
)