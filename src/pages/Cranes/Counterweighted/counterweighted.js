import React from 'react';
import { Helmet } from 'react-helmet';
import { CounterweightedStyles } from './styles';
import { withProductPage } from '../../../components/Products/product-page-container';
import { Header } from '../../../components/Header/header';
import HeaderImg from '../../../img/products/cranes/header.jpg';
import { ProductIntro } from '../../../components/Products/Cranes/product-intro';
import IntroImg from '../../../img/products/cranes/models/counterweighted-cranes.jpg';
import { FeaturesAndSpecs } from '../../../components/Products/FeaturesAndSpecs/features-and-specs';
import { FeatureList } from '../../../data/features/cranes';
import { Queries } from '../../../data/queries';
import { CraneDocumentation } from '../../../data/documentation/cranes';
import { Models } from '../../../data/models';
import { columns } from './spec-columns';
import { Documentation } from '../../../components/Products/Documentation/documentation';
import { BeechDifference } from '../../../components/Products/BeechDifference/beech-difference';

const Counterweighted = ({setModel, getSelected, specImgSrc, featureImgSrc, model}) => (
    <CounterweightedStyles>
        <Helmet>
            <title>Counterweighted Floor Cranes for Lifting and Placing Materials and Equipment in Warehouse or Plant</title>
            <meta name="description" content="Beach Design counterweighted cranes are ideal for lifting in warehousing and manufacturing facilities where floor space is restricted. Beech Design & Manufacturing provides competitive pricing without sacrificing quality with models ranging in capacities from 500 lbs to 2000 lbs.  We also offer custom-built cranes to suit your specific needs." />
        </Helmet>
        <Header name="Counterweighted Cranes" background={HeaderImg} />
        <ProductIntro url="counterweighted" models={Models.CounterweightedCranes} modelSelected={getSelected} img={IntroImg} />
        <FeaturesAndSpecs
            models={Models.CounterweightedCranes}
            product="counterweighted"
            features={FeatureList}
            columns={columns}
            type="cranes"
            featureImgSrc={featureImgSrc}
            query={Queries.CraneSpecs}
            queryName="craneSpecs"
            modelSelected={model}
            setModel={setModel}
            specImgSrc={specImgSrc} />
        <Documentation product="counterweighted" docs={CraneDocumentation} />
        <BeechDifference name="Counterweighted" title="The Beech Difference" />
    </CounterweightedStyles>
);

export const CounterweightedCranes = withProductPage(Counterweighted, Models.CounterweightedCranes, 'cranes', 'counterweighted');