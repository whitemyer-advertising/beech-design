import React from "react";
import { Helmet } from 'react-helmet';
import { StackerStyles } from "./styles";
import { Header } from '../../components/Header/header';
import HeaderImg from '../../img/products/stackers/header.jpg';
import { CategoryIntro } from '../../components/Products/Stackers/category-intro';
import { ProductTypes } from '../../components/Products/ProductTypes/product-types';
import { ModelSelection } from '../../components/Products/Stackers/model-selection';
import { StackerProductTypeImages } from '../../components/ProductTypeImages/stackers';
import { WhyChooseStackers } from "../../components/Products/Stackers/why-choose-stackers";

export const Stackers = () => (
    <StackerStyles>
        <Helmet>
            <title>Hydraulic and Winch Operated Stackers for Material Handling</title>
            <meta name="description" content="Beech Design & Manufacturing provides a full line of stackers for your material handling needs, including custom designed equipment.  All are factory proof-tested to 150% of capacity and come with a 2-year warranty on machine and 5-year warranty on weldment." />
        </Helmet>
        <Header name="Stackers" background={HeaderImg} />
        <CategoryIntro />
        <ProductTypes category="Stackers" CategoryImages={StackerProductTypeImages} />
        <WhyChooseStackers />
        <ModelSelection />
    </StackerStyles>
)