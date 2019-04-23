import React from 'react';
import { Helmet } from 'react-helmet';
import { CounterweightedWinchStyles } from './styles';
import { withProductPage } from '../../../components/Products/product-page-container';
import { Header } from '../../../components/Header/header';
import HeaderImg from '../../../img/products/stackers/header.jpg';
import { ProductIntro } from '../../../components/Products/Stackers/product-intro';
import IntroImg from '../../../img/products/stackers/models/counterweighted-winch-stackers.jpg';
import { FeaturesAndSpecs } from '../../../components/Products/FeaturesAndSpecs/features-and-specs';
import { FeatureList } from '../../../data/features/stackers';
import { Queries } from '../../../data/queries';
import { StackerDocumentation } from '../../../data/documentation/stackers';
import { Models } from '../../../data/models';
import { columns } from './spec-columns';
import { Documentation } from '../../../components/Products/Documentation/documentation';
import { BeechDifference } from '../../../components/Products/BeechDifference/beech-difference';

const CounterweightedWinch = ({setModel, getSelected, src, model}) => (
    <CounterweightedWinchStyles>
        <Helmet>
            <title>Counterweighted Winch Stackers Load, Unload, Feed Machines, Handle Dies</title>
            <meta name="description" content="Counterweighted winch stackers from Beech Design & Manufacturing are ideal for tasks where straddle legs interfere with operation, such as transferring loads to dock level, loading and unloading trucks, stacking skids, pallets or crates, die handling and feeding machines." />
        </Helmet>
        <Header name="Counterweighted Winch Stackers" background={HeaderImg} />
        <ProductIntro url="counterweighted-winch" models={Models.Counterweighted_Winch} modelSelected={getSelected} img={IntroImg} />
        <FeaturesAndSpecs
            models={Models.Counterweighted_Winch}
            product="counterweighted winch"
            features={FeatureList}
            columns={columns}
            type="stackers"
            query={Queries.StackerSpecs}
            queryName="stackerSpecs"
            modelSelected={model}
            setModel={setModel}
            src={src} />
        <Documentation product="counterweighted winch" docs={StackerDocumentation} />
        <BeechDifference name="Counterweighted Winch" title="The Beech Difference" />
    </CounterweightedWinchStyles>
);

export const CounterweightedWinchStackers = withProductPage(CounterweightedWinch, Models.Counterweighted_Winch, 'stackers', 'counterweighted winch');