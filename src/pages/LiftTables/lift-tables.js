import React from "react";
import { Helmet } from 'react-helmet';
import { LiftTableStyles } from "./styles";
import { Header } from '../../components/Header/header';
import HeaderImg from '../../img/products/lift-tables/header.jpg';
import { CategoryIntro } from '../../components/Products/LiftTables/category-intro';
import { ProductTypes } from '../../components/Products/ProductTypes/product-types';
import { ModelSelection } from '../../components/Products/LiftTables/model-selection';
import { LiftTableProductTypeImages } from '../../components/ProductTypeImages/lift-tables';
import { WhyChooseLiftTables } from "../../components/Products/LiftTables/why-choose-lift-tables";

export const LiftTables = () => (
    <LiftTableStyles>
        <Helmet>
            <title>Beech Design Lift and Tilt Tables for Work and Load Positioning</title>
            <meta name="description" content="Beech Design lift tables are the answer to your parts handling and assembly work needs. They are designed to lower material handling costs and increase productivity. The LoadRedi™ line includes stationary and portable scissor lift tables and tilt tables." />
        </Helmet>
        <Header name="Lift Tables" background={HeaderImg} />
        <CategoryIntro />
        <ProductTypes category="Lift Tables" CategoryImages={LiftTableProductTypeImages} />
        <WhyChooseLiftTables />
        <ModelSelection />
    </LiftTableStyles>
)