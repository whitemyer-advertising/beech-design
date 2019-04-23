import React from 'react';
import { Helmet } from 'react-helmet';
import { PlatformStyles } from './styles';
import { withProductPage } from '../../../components/Products/product-page-container';
import { Header } from '../../../components/Header/header';
import HeaderImg from '../../../img/products/stackers/header.jpg';
import { ProductIntro } from '../../../components/Products/Stackers/product-intro';
import IntroImg from '../../../img/products/stackers/models/platform-stackers.jpg';
import { FeaturesAndSpecs } from '../../../components/Products/FeaturesAndSpecs/features-and-specs';
import { FeatureList } from '../../../data/features/stackers';
import { Queries } from '../../../data/queries';
import { StackerDocumentation } from '../../../data/documentation/stackers';
import { Models } from '../../../data/models';
import { columns } from './spec-columns';
import { Documentation } from '../../../components/Products/Documentation/documentation';
import { BeechDifference } from '../../../components/Products/BeechDifference/beech-difference';

const Platform = ({setModel, getSelected, specImgSrc, featureImgSrc, model}) => (
    <PlatformStyles>
        <Helmet>
            <title>Platform Stackers and Work Positioners for Material Handling</title>
            <meta name="description" content="Beech Design & Manufacturing provides a variety of platform stackers, including foot pedal pump, battery powered lift and winch models as well as custom designed equipment.  All are factory proof-tested to 150% of capacity and come with a 2-year warranty on machine and 5-year warranty on weldment." />
        </Helmet>
        <Header name="Platform Stackers" background={HeaderImg} />
        <ProductIntro url="platform" models={Models.Stackers} modelSelected={getSelected} img={IntroImg} />
        <FeaturesAndSpecs
            models={Models.Stackers}
            product="platform"
            features={FeatureList}
            columns={columns}
            type="stackers"
            featureImgSrc={featureImgSrc}
            query={Queries.StackerSpecs}
            queryName="stackerSpecs"
            modelSelected={model}
            setModel={setModel}
            specImgSrc={specImgSrc} />
        <Documentation product="platform" docs={StackerDocumentation} />
        <BeechDifference name="Platform" title="The Beech Difference" />
    </PlatformStyles>
)

export const PlatformStackers = withProductPage(Platform, Models.Stackers, 'stackers', 'platform');