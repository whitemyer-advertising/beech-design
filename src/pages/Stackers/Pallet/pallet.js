import React from 'react';
import { Helmet } from 'react-helmet';
import { PalletStyles } from './styles';
import { withProductPage } from '../../../components/Products/product-page-container';
import { Header } from '../../../components/Header/header';
import HeaderImg from '../../../img/products/stackers/header.jpg';
import { ProductIntro } from '../../../components/Products/Stackers/product-intro';
import IntroImg from '../../../img/products/stackers/models/pallet-stackers.jpg';
import { FeaturesAndSpecs } from '../../../components/Products/FeaturesAndSpecs/features-and-specs';
import { FeatureList } from '../../../data/features/stackers';
import { Queries } from '../../../data/queries';
import { StackerDocumentation } from '../../../data/documentation/stackers';
import { Models } from '../../../data/models';
import { columns } from './spec-columns';
import { Documentation } from '../../../components/Products/Documentation/documentation';
import { BeechDifference } from '../../../components/Products/BeechDifference/beech-difference';

const Pallet = ({setModel, getSelected, src, model}) => (
    <PalletStyles>
        <Helmet>
            <title>Pallet Stackers for Order Picking and Placing Goods in Warehouse or Plant</title>
            <meta name="description" content="Pallet stackers, or lift trucks are ideal for picking and placing product.  Beech Design & Manufacturing provides competitive pricing without sacrificing quality on a variety of platform stackers, including foot pedal pump, battery powered lift and winch models as well as custom designed equipment." />
        </Helmet>
        <Header name="Pallet Stackers" background={HeaderImg} />
        <ProductIntro url="pallet" models={Models.Stackers} modelSelected={getSelected} img={IntroImg}  />
        <FeaturesAndSpecs
            models={Models.Stackers}
            product="pallet"
            features={FeatureList}
            columns={columns}
            type="stackers"
            query={Queries.StackerSpecs}
            queryName="stackerSpecs"
            modelSelected={model}
            setModel={setModel}
            src={src} />
        <Documentation product="pallet" docs={StackerDocumentation} />
        <BeechDifference name="Pallet" title="The Beech Difference" />
    </PalletStyles>
);

export const PalletStackers = withProductPage(Pallet, Models.Stackers, 'stackers', 'pallet');