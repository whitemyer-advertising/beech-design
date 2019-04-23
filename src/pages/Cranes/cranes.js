import React from "react";
import { Helmet } from 'react-helmet';
import { CraneStyles } from "./styles";
import { Header } from '../../components/Header/header';
import HeaderImg from '../../img/products/cranes/header.jpg';
import { CategoryIntro } from '../../components/Products/Cranes/category-intro';
import { ProductTypes } from '../../components/Products/ProductTypes/product-types';
import { ModelSelection } from '../../components/Products/Cranes/model-selection';
import { CraneProductTypeImages } from '../../components/ProductTypeImages/cranes';
import { WhyChooseCranes } from "../../components/Products/Cranes/why-choose-cranes";
import SelectRightModelImage from '../../img/products/stackers/select-right-model.jpg';

export const Cranes = () => (
    <CraneStyles>
        <Helmet>
            <title>Straddle and Counterweighted Floor Cranes for Material Handling</title>
            <meta name="description" content="Beach Design floor cranes are the solution for everyday lifting needs when an overhead lift is not available.  Beech Design & Manufacturing provides competitive pricing without sacrificing quality with both straddle type and counterweighted crane model.  We also offer custom-built cranes to suit your specific needs." />
        </Helmet>
        <Header name="Cranes" background={HeaderImg} />
        <CategoryIntro />
        <ProductTypes category="Cranes" CategoryImages={CraneProductTypeImages} />
        <WhyChooseCranes />
        <ModelSelection src={SelectRightModelImage} alt="Choose Stacker vs Forklift" />
    </CraneStyles>
)