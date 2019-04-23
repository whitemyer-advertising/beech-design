import React from 'react';
import { Helmet } from 'react-helmet';
import { PowerDrivenCounterweightedCraneStyles } from './styles';
import { withProductPage } from '../../../components/Products/product-page-container';
import { Header } from '../../../components/Header/header';
import HeaderImg from '../../../img/products/power-driven/header.jpg';
import { ProductIntro } from '../../../components/Products/PowerDriven/product-intro';
import IntroImg from '../../../img/products/cranes/models/counterweighted-cranes.jpg';
import { FeaturesAndSpecs } from '../../../components/Products/FeaturesAndSpecs/features-and-specs';
import { FeatureList } from '../../../data/features/power-driven';
import { Queries } from '../../../data/queries';
import { PowerDrivenDocumentation } from '../../../data/documentation/power-driven';
import { Models } from '../../../data/models';
import { columns } from './spec-columns';
import { Documentation } from '../../../components/Products/Documentation/documentation';
import { BeechDifference } from '../../../components/Products/BeechDifference/beech-difference';

const CounterweightedCrane = ({setModel, getSelected, specImgSrc, featureImgSrc, model}) => (
    <PowerDrivenCounterweightedCraneStyles>
        <Helmet>
            <title>Power Driven Counterweight Floor Cranes for Material Handling</title>
            <meta name="description" content="Manufactured for safety, ergonomics and durability, Beech Power Driven Counterbalanced Cranes feature quality and standard features that are second to none, including our patent-pending 5th Wheel Suspension Drive, Beech Power Driven Counterbalanced Cranes maintain constant traction and steering effort regardless of the weight of the load." />
        </Helmet>
        <Header name="Power Driven Counterweighted Cranes" background={HeaderImg} />
        <ProductIntro url="counterweighted-crane" models={Models.PowerDrivenCounterweightedCranes} modelSelected={getSelected} img={IntroImg} />
        <FeaturesAndSpecs
            models={Models.PowerDrivenCounterweightedCranes}
            product="counterweighted crane"
            features={FeatureList}
            columns={columns}
            type="power driven"
            featureImgSrc={featureImgSrc}
            query={Queries.CraneSpecs}
            queryName="craneSpecs"
            modelSelected={model}
            setModel={setModel}
            specImgSrc={specImgSrc} />
        <Documentation product="counterweighted crane" docs={PowerDrivenDocumentation} />
        <BeechDifference name="Counterweighted Crane" title="The Beech Difference" />
    </PowerDrivenCounterweightedCraneStyles>
);

export const PowerDrivenCounterweightedCranes = withProductPage(CounterweightedCrane, Models.PowerDrivenCounterweightedCranes, 'power driven', 'counterweighted cranes');