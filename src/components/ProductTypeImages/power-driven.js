import React from "react";
import CounterweightedCraneImg from '../../img/products/cranes/product-types/counterweighted.png';
import ForkStackerImg from '../../img/products/stackers/product-types/fork.png';
import PlatformStackerImg from '../../img/products/stackers/product-types/platform.png';

const checkImgImportName = (name) => {
    switch(name) {
        case 'CounterweightedCrane':
            return CounterweightedCraneImg;
        case 'ForkStacker':
            return ForkStackerImg;
        case 'PlatformStacker':
            return PlatformStackerImg;
        default:
            return '';
    }
}
export const PowerDrivenProductTypeImages = ({name}) => (
    <img src={checkImgImportName(name)} alt={name} />
)