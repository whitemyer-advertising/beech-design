import React from "react";
import StraddleImg from '../../img/products/cranes/product-types/straddle.png';
import CounterweightedImg from '../../img/products/cranes/product-types/counterweighted.png';
import CounterweightedPowerLiftImg from '../../img/products/cranes/product-types/counterweighted-power-lift.png';
import CustomImg from '../../img/products/cranes/product-types/custom.png';

const checkImgImportName = (name) => {
    switch(name) {
        case 'Straddle':
            return StraddleImg;
        case 'Counterweighted':
            return CounterweightedImg;
        case 'CounterweightedPowerLift':
            return CounterweightedPowerLiftImg;
        case 'Custom':
            return CustomImg;
        default:
            return '';
    }
}
export const CraneProductTypeImages = ({name}) => (
    <img src={checkImgImportName(name)} alt={name} />
)