import React from "react";
import { WhyChooseStyles } from '../../Styles/Products/why-choose';
import StackerVsForkImage from '../../../img/products/stackers/stackers-vs-forklift.png';
import { ListStyles } from '../../Styles/list';

export const WhyChooseCranes = () => (
    <WhyChooseStyles>
        <div className="why-choose-copy">
            <h2>Why choose a floor crane?</h2>
            <p>Floor cranes are a key piece of equipment in factories, warehouses, workshops and garages.  They can be used to lift heavy, awkward loads, and are portable so you can use them all around your facility.  In addition, they are a safe, easy-to-use alternative to permanent overhead cranes.</p>
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