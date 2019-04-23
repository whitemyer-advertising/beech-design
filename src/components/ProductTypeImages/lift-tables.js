import React from "react";
import ScissorImg from '../../img/products/lift-tables/product-types/scissor.png';
import TiltImg from '../../img/products/lift-tables/product-types/tilt.png';
import CustomImg from '../../img/products/lift-tables/product-types/custom.png';

const checkImgImportName = (name) => {
    switch(name) {
        case 'Scissor':
            return ScissorImg;
        case 'Tilt':
            return TiltImg;
        case 'Custom':
            return CustomImg;
        default:
            return '';
    }
}
export const LiftTableProductTypeImages = ({name}) => (
    <img src={checkImgImportName(name)} alt={name} />
)