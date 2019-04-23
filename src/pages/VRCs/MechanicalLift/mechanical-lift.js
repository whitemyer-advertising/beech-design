import React from 'react';
import { Helmet } from 'react-helmet';
import { MechanicalLiftStyles } from './styles';
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

const MechanicalLift = ({setModel, getSelected, specImgSrc, featureImgSrc, model}) => (
    <MechanicalLiftStyles>
        <Helmet>
            <title>Mechanical Vertical Reciprocating Conveyors – Straddle and Cantilever Types</title>
            <meta name="description" content="Beech mechanical vertical reciprocating conveyors offer a durable and economical means for lifting materials in multi-level and/or high speed applications and where intermediate stops are necessary." />
        </Helmet>
        <Header name="Mechanical VRCs" background={HeaderImg} />
        <ProductIntro url="mechanical-lift" models={Models.MechanicalLiftVRCs} modelSelected={getSelected} />
        <FeaturesAndSpecs
            models={Models.MechanicalLiftVRCs}
            product="mechanical lift"
            features={FeatureList}
            columns={columns}
            type="vrcs"
            featureImgSrc={featureImgSrc}
            query={Queries.LiftTableSpecs}
            queryName="liftTableSpecs"
            modelSelected={model}
            setModel={setModel}
            specImgSrc={specImgSrc} />
        <Documentation product="mechanical lift" docs={VRCDocumentation} />
        <BeechDifference name="Mechanical Lift" title="Built to Beech Standards" />
    </MechanicalLiftStyles>
);

export const MechanicalLiftVRCs = withProductPage(MechanicalLift, Models.MechanicalLiftVRCs, 'vrcs', 'mechanical lift');