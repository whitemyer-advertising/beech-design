import React from "react";
import { Helmet } from 'react-helmet';
import { PowerDrivenStyles } from "./styles";
import { Header } from '../../components/Header/header';
import HeaderImg from '../../img/products/power-driven/header.jpg';
import { CategoryIntro } from '../../components/Products/PowerDriven/category-intro';
import { ProductTypes } from '../../components/Products/ProductTypes/product-types';
import { ModelSelection } from '../../components/Products/PowerDriven/model-selection';
import { PowerDrivenProductTypeImages } from '../../components/ProductTypeImages/power-driven';
import { WhyChoosePowerDriven } from "../../components/Products/PowerDriven/why-choose-power-driven";

export const PowerDriven = () => (
    <PowerDrivenStyles>
        <Helmet>
            <title>Power Driven Cranes and Stackers for Material Handling | Beech Design</title>
            <meta name="description" content="Beech Design & Manufacturing power driven cranes and stackers are designed and manufactured for safety, ergonomics and durability. They are ideal for transporting materials longer distances." />
        </Helmet>
        <Header name="Power Driven Equipment" background={HeaderImg} />
        <CategoryIntro />
        <ProductTypes category="Power Driven" CategoryImages={PowerDrivenProductTypeImages} />
        <WhyChoosePowerDriven />
        <ModelSelection />
    </PowerDrivenStyles>
)