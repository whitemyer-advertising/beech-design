import React from 'react';
import { Helmet } from 'react-helmet';
import { ScissorLiftStyles } from './styles';
import { withProductPage } from '../../../components/Products/product-page-container';
import { Header } from '../../../components/Header/header';
import HeaderImg from '../../../img/products/lift-tables/header.jpg';
import { ProductIntro } from '../../../components/Products/LiftTables/product-intro';
import IntroImg from '../../../img/products/lift-tables/models/loadredi-scissor-lift-tables.jpg';
import { FeaturesAndSpecs } from '../../../components/Products/FeaturesAndSpecs/features-and-specs';
import { FeatureList } from '../../../data/features/lift-tables';
import { Queries } from '../../../data/queries';
import { LiftTableDocumentation } from '../../../data/documentation/lift-tables';
import { Models } from '../../../data/models';
import { columns } from './spec-columns';
import { Documentation } from '../../../components/Products/Documentation/documentation';
import { BeechDifference} from '../../../components/Products/BeechDifference/beech-difference';

const ScissorLift = ({setModel, getSelected, specImgSrc, featureImgSrc, model}) => (
    <ScissorLiftStyles>
        <Helmet>
            <title>Straddle Floor Cranes for Lifting and Placing Materials and Equipment in Warehouse or Plant</title>
            <meta name="description" content="Beach Design straddle cranes meet every day lifting needs for industrial facilities and are ideal for narrower loads. Beech Design & Manufacturing provides competitive pricing without sacrificing quality with models ranging in capacities from 1000 lbs to 3000 lbs.  We also offer custom-built cranes to suit your specific needs." />
        </Helmet>
        <Header name="LoadRedi&trade; Scissor Lift Tables" background={HeaderImg} />
        <ProductIntro url="loadredi-scissor" models={Models.ScissorLifts} modelSelected={getSelected} img={IntroImg} />
        <FeaturesAndSpecs
            models={Models.ScissorLifts}
            product="scissor"
            features={FeatureList}
            columns={columns}
            type="lift tables"
            featureImgSrc={featureImgSrc}
            query={Queries.LiftTableSpecs}
            queryName="liftTableSpecs"
            modelSelected={model}
            setModel={setModel}
            specImgSrc={specImgSrc} />
        <Documentation product="scissor" docs={LiftTableDocumentation} />
        <BeechDifference name="Scissor" title="Built to Beech Standards" />
    </ScissorLiftStyles>
);

export const ScissorLiftTables = withProductPage(ScissorLift, Models.ScissorLifts, 'lift tables', 'scissor');