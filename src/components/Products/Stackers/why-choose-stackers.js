import React from "react";
import { WhyChooseStyles } from '../../Styles/Products/why-choose';
import StackerVsForkImage from '../../../img/products/stackers/stackers-vs-forklift.png';
import { ListStyles } from '../../Styles/list';

export const WhyChooseStackers = () => (
    <WhyChooseStyles>
        <div className="why-choose-copy">
            <h2>Why choose a stacker over a forklift?</h2>
            <p>Think of a stacker as a combination of a walk-behind pallet jack with the features of a lift truck.  But with a smaller footprint and lower cost. Stackers can be used for a variety of material handling tasks such as:</p>
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