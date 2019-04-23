import React from "react";
import { WhyChooseStyles } from '../../Styles/Products/why-choose';
import StackerVsForkImage from '../../../img/products/stackers/stackers-vs-forklift.png';
import { ListStyles } from '../../Styles/list';

export const WhyChoosePowerDriven = () => (
    <WhyChooseStyles>
        <div className="why-choose-copy">
            <h2>Why choose power-driven material handling equipment?</h2>
            <p>Choose Beech power driven cranes and stackers when you need to transport materials longer distances.</p>
            <ListStyles>
                <li>Lifing and positioning work product</li>
                <li>Dock loading</li>
                <li>Stacking pallets</li>
                <li>Operating in narrow aisles or close quarters with work cells</li>
                <li>Intermediate handling of products where a traditional forklift truck is not economically viable, or due to space constraints</li>
            </ListStyles>
        </div>
        <div className="why-choose-img">
            <img src={StackerVsForkImage} alt="Choose Stacker vs Forklift" />
        </div>
    </WhyChooseStyles>
)