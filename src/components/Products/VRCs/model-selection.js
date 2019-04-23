import React from "react";
import { ModelSelectionStyles } from "../../Styles/Products/model-selection";
import { ListStyles } from '../../Styles/list';
import SelectRightModelImage from '../../../img/products/stackers/select-right-model.jpg';

export const ModelSelection = () => (
    <ModelSelectionStyles>
        <div className="select-right-model-copy">
            <h2>How to select the right VRC</h2>
            <p>Many factors come into play, but to get started, the following criteria are important in determine the type of VRC that will best serve your needs:</p>
            <ListStyles>
                <li>Load size and weight</li>
                <li>Number of levels or feet material must travel (vertical travel)</li>
                <li>Flexibility of loading patterns</li>
                <li>Overhead structure restrictions</li>
            </ListStyles>
        </div>
        <div className="select-right-model-img">
            <img src={SelectRightModelImage} alt="Selecting the right VRC" />
        </div>
    </ModelSelectionStyles>
)