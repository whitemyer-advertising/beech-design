import React from "react";
import { Helmet } from 'react-helmet';
import { VRCStyles } from "./styles";
import { Header } from '../../components/Header/header';
import HeaderImg from '../../img/products/vrcs/header.jpg';
import { CategoryIntro } from '../../components/Products/VRCs/category-intro';
import { ProductTypes } from '../../components/Products/ProductTypes/product-types';
import { ModelSelection } from '../../components/Products/VRCs/model-selection';
import { VRCProductTypeImages } from '../../components/ProductTypeImages/vrcs';
import { WhatIsAVRC } from "../../components/Products/VRCs/what-is";

export const VRCs = () => (
    <VRCStyles>
        <Helmet>
            <title>Vertical Reciprocating Conveyors, Vertical Lifts For Moving Freight Vertically</title>
            <meta name="description" content="Beech Design’s MATERIALIFT vertical reciprocating conveyors can save up to 75% of a freight elevator’s cost. Select from a broad line of standard hydraulic or mechanical models, or contact us for a custom-engineered unit." />
        </Helmet>
        <Header name="VRCs" background={HeaderImg} />
        <CategoryIntro />
        <ProductTypes category="VRCs" CategoryImages={VRCProductTypeImages} />
        <WhatIsAVRC />
        <ModelSelection />
    </VRCStyles>
)