import React from "react";
import './layer-position.css';
import { BackButton } from '../back-button';
import { LayersList } from '../Layers/layers-list';
import { ProductSectionStyles } from './styles';
import { ProductDetail } from './ProductDetail/product-detail';

export const ProductSection = ({expand, showDetails, showLayers}) => (
    <ProductSectionStyles>
        <div className="product-categories">
            <LayersList getDetails={showDetails} expandMobile={expand} />
        </div>
        <div className="product-details hide">
            {window.innerWidth > 640 ? <BackButton color="#fff" handleClick={showLayers} /> : null}
            <ProductDetail />
        </div>
    </ProductSectionStyles>
);