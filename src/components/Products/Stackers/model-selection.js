import React from "react";
import { ModelSelectionStyles } from "../../Styles/Products/model-selection";
import { ListStyles } from '../../Styles/list';
import SelectRightModelImage from '../../../img/products/stackers/select-right-model.jpg';

export const ModelSelection = () => (
    <ModelSelectionStyles>
        <div className="select-right-model-copy">
            <h2>How to select the right model</h2>
            <p>Many factors come into play, but to get started, the following criteria are important in determine the type of stacker that will best serve your needs:</p>
            <ListStyles>
                <li>Load capacity</li>
                <li>Number of loads</li>
                <li>How far the load must travel</li>
                <li>Obstructions that may hinder load placement</li>
            </ListStyles>
        </div>
        <div className="select-right-model-img">
            <img src={SelectRightModelImage} alt="Selecting the right Stacker" />
        </div>
    </ModelSelectionStyles>
)