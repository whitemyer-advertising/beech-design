import React from "react";
import HydraulicLiftImg from '../../img/products/vrcs/product-types/hydraulic-lift.png';
import MechanicalLiftImg from '../../img/products/vrcs/product-types/mechanical-lift.png';
import CustomEngineeredImg from '../../img/products/vrcs/product-types/custom-engineered.png';

const checkImgImportName = (name) => {
    switch(name) {
        case 'HydraulicLift':
            return HydraulicLiftImg;
        case 'MechanicalLift':
            return MechanicalLiftImg;
        case 'CustomEngineered':
            return CustomEngineeredImg;
        default:
            return '';
    }
}
export const VRCProductTypeImages = ({name}) => (
    <img src={checkImgImportName(name)} alt={name} />
)