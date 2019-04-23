import React from "react";
import BatteryLiftCounterbalancedImg from '../../img/products/stackers/product-types/battery-lift-counterbalanced.png';
import CounterweightedWinchImg from '../../img/products/stackers/product-types/counterweighted-winch.png';
import PlatformImg from '../../img/products/stackers/product-types/platform.png';
import ForkImg from '../../img/products/stackers/product-types/fork.png';
import BoomImg from '../../img/products/stackers/product-types/boom.png';
import PalletImg from '../../img/products/stackers/product-types/pallet.png';
import CustomImg from '../../img/products/stackers/product-types/custom.png';

const checkImgImportName = (name) => {
    switch(name) {
        case 'BatteryLiftCounterbalanced':
            return BatteryLiftCounterbalancedImg;
        case 'CounterweightedWinch':
            return CounterweightedWinchImg;
        case 'Platform':
            return PlatformImg;
        case 'Fork':
            return ForkImg;
        case 'Boom':
            return BoomImg;
        case 'Pallet':
            return PalletImg;
        case 'Custom':
            return CustomImg;
        default:
            return '';
    }
}
export const StackerProductTypeImages = ({name}) => (
    <img src={checkImgImportName(name)} alt={name} />
)