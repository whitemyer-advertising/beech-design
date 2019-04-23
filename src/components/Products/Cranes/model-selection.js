import React from "react";
import { ModelSelectionStyles } from "../../Styles/Products/model-selection";
import { ListStyles } from '../../Styles/list';
import SelectRightModelImage from '../../../img/products/stackers/select-right-model.jpg';

export const ModelSelection = () => (
    <ModelSelectionStyles>
        <div className="select-right-model-copy">
            <h2>How to select the right model</h2>
            <p>Many factors come into play, but to get started, the following criteria are important in determine the type of crane that will best serve your needs:</p>
            <ListStyles>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
            </ListStyles>
            <p>Explore our many crane options to see which is right for your material handling needs.</p>
        </div>
        <div className="select-right-model-img">
            <img src={SelectRightModelImage} alt="Selecting the right Crane" />
        </div>
    </ModelSelectionStyles>
)