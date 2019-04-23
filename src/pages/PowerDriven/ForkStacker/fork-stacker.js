import React from 'react';
import { Helmet } from 'react-helmet';
import { PowerDrivenForkStackerStyles } from './styles';
import { withProductPage } from '../../../components/Products/product-page-container';
import { Header } from '../../../components/Header/header';
import HeaderImg from '../../../img/products/power-driven/header.jpg';
import { ProductIntro } from '../../../components/Products/PowerDriven/product-intro';
import IntroImg from '../../../img/products/stackers/models/fork-stackers.jpg';
import { FeaturesAndSpecs } from '../../../components/Products/FeaturesAndSpecs/features-and-specs';
import { FeatureList } from '../../../data/features/power-driven';
import { Queries } from '../../../data/queries';
import { PowerDrivenDocumentation } from '../../../data/documentation/power-driven';
import { columns } from './spec-columns';
import { Documentation } from '../../../components/Products/Documentation/documentation';
import { BeechDifference } from '../../../components/Products/BeechDifference/beech-difference';

const ForkStacker = ({specImgSrc, featureImgSrc}) => (
    <PowerDrivenForkStackerStyles>
        <Helmet>
            <title>Power Driven Fork Stackers for Material Handling</title>
            <meta name="description" content="Beech Power Driven Platform Stackers are manufactured for safety, ergonomics and durability, with quality and standard features that are second to none. Featuring our patent-pending 5th Wheel Suspension Drive, Beech Power Driven Platform Stackers maintain constant traction and steering effort regardless of the weight of the load." />
        </Helmet>
        <Header name="Power Driven Fork Stackers" background={HeaderImg} />
        <ProductIntro url="fork-stacker" img={IntroImg} />
        <FeaturesAndSpecs
            models=''
            product="fork stacker"
            features={FeatureList}
            columns={columns}
            type="power driven"
            featureImgSrc={featureImgSrc}
            query={Queries.StackerSpecs}
            queryName="stackerSpecs"
            modelSelected=''
            specImgSrc={specImgSrc} />
        <Documentation product="fork stacker" docs={PowerDrivenDocumentation} />
        <BeechDifference name="Fork Stacker" title="The Beech Difference" />
    </PowerDrivenForkStackerStyles>
);

export const PowerDrivenForkStackers = withProductPage(ForkStacker, '', 'power driven', 'fork stacker');