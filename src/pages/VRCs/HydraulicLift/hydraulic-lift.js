import React from 'react';
import { Helmet } from 'react-helmet';
import { HydraulicLiftStyles } from './styles';
import { withProductPage } from '../../../components/Products/product-page-container';
import { Header } from '../../../components/Header/header';
import HeaderImg from '../../../img/products/vrcs/header.jpg';
import { ProductIntro } from '../../../components/Products/VRCs/product-intro';
import { FeaturesAndSpecs } from '../../../components/Products/FeaturesAndSpecs/features-and-specs';
import { FeatureList } from '../../../data/features/vrcs';
import { Queries } from '../../../data/queries';
import { VRCDocumentation } from '../../../data/documentation/vrcs';
import { Models } from '../../../data/models';
import { columns } from './spec-columns';
import { Documentation } from '../../../components/Products/Documentation/documentation';
import { BeechDifference} from '../../../components/Products/BeechDifference/beech-difference';

const HydraulicLift = ({setModel, getSelected, specImgSrc, featureImgSrc, model}) => (
    <HydraulicLiftStyles>
        <Helmet>
            <title>Hydraulic Vertical Reciprocating Conveyors – Straddle and Cantilever Types</title>
            <meta name="description" content="Beech hydraulic vertical reciprocating conveyors offer a durable and economical means for lifting materials to mezzanines and other two-level applications requiring moderate duty cycles." />
        </Helmet>
        <Header name="Hydraulic VRCs" background={HeaderImg} />
        <ProductIntro url="hydraulic-lift" models={Models.HydraulicLiftVRCs} modelSelected={getSelected} />
        <FeaturesAndSpecs
            models={Models.HydraulicLiftVRCs}
            product="hydraulic lift"
            features={FeatureList}
            columns={columns}
            type="vrcs"
            featureImgSrc={featureImgSrc}
            query={Queries.LiftTableSpecs}
            queryName="liftTableSpecs"
            modelSelected={model}
            setModel={setModel}
            specImgSrc={specImgSrc} />
        <Documentation product="hydraulic lift" docs={VRCDocumentation} />
        <BeechDifference name="Hydraulic Lift" title="Built to Beech Standards" />
    </HydraulicLiftStyles>
);

export const HydraulicLiftVRCs = withProductPage(HydraulicLift, Models.HydraulicLiftVRCs, 'vrcs', 'hydraulic lift');