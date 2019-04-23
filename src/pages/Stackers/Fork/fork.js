import React from 'react';
import { Helmet } from 'react-helmet';
import { ForkStyles } from './styles';
import { withProductPage } from '../../../components/Products/product-page-container';
import { Header } from '../../../components/Header/header';
import HeaderImg from '../../../img/products/stackers/header.jpg';
import { ProductIntro } from '../../../components/Products/Stackers/product-intro';
import IntroImg from '../../../img/products/stackers/models/fork-stackers.jpg';
import { FeaturesAndSpecs } from '../../../components/Products/FeaturesAndSpecs/features-and-specs';
import { FeatureList } from '../../../data/features/stackers';
import { Queries } from '../../../data/queries';
import { StackerDocumentation } from '../../../data/documentation/stackers';
import { Models } from '../../../data/models';
import { columns } from './spec-columns';
import { Documentation } from '../../../components/Products/Documentation/documentation';
import { BeechDifference } from '../../../components/Products/BeechDifference/beech-difference';

const Fork = ({setModel, getSelected, src, model}) => (
    <ForkStyles>
        <Helmet>
            <title>Fork Stackers Alternative to Forklifts for Material Handling</title>
            <meta name="description" content="Fork stackers are an efficient substitute or supplement to forklifts in your production or warehouse facility.  Beech Design & Manufacturing provides a variety of fork stackers, including foot pedal pump, battery powered lift and winch models as well as custom designed equipment." />
        </Helmet>
        <Header name="Fork Stackers" background={HeaderImg} />
        <ProductIntro url="fork" models={Models.Stackers} modelSelected={getSelected} img={IntroImg} />
        <FeaturesAndSpecs
            models={Models.Stackers}
            product="fork"
            features={FeatureList}
            columns={columns}
            type="stackers"
            query={Queries.StackerSpecs}
            queryName="stackerSpecs"
            modelSelected={model}
            setModel={setModel}
            src={src} />
        <Documentation product="fork" docs={StackerDocumentation} />
        <BeechDifference name="Fork" title="The Beech Difference" />
    </ForkStyles>
);

export const ForkStackers = withProductPage(Fork, Models.Stackers, 'stackers', 'fork');