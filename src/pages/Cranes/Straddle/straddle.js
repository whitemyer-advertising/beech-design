import React from 'react';
import { Helmet } from 'react-helmet';
import { StraddleStyles } from './styles';
import { withProductPage } from '../../../components/Products/product-page-container';
import { Header } from '../../../components/Header/header';
import HeaderImg from '../../../img/products/cranes/header.jpg';
import { ProductIntro } from '../../../components/Products/Cranes/product-intro';
import IntroImg from '../../../img/products/cranes/models/straddle-cranes.jpg';
import { FeaturesAndSpecs } from '../../../components/Products/FeaturesAndSpecs/features-and-specs';
import { FeatureList } from '../../../data/features/cranes';
import { Queries } from '../../../data/queries';
import { CraneDocumentation } from '../../../data/documentation/cranes';
import { Models } from '../../../data/models';
import { columns } from './spec-columns';
import { Documentation } from '../../../components/Products/Documentation/documentation';
import { BeechDifference } from '../../../components/Products/BeechDifference/beech-difference';

const Straddle = ({setModel, getSelected, specImgSrc, featureImgSrc, model}) => (
    <StraddleStyles>
        <Helmet>
            <title>Straddle Floor Cranes for Lifting and Placing Materials and Equipment in Warehouse or Plant</title>
            <meta name="description" content="Beach Design straddle cranes meet every day lifting needs for industrial facilities and are ideal for narrower loads. Beech Design & Manufacturing provides competitive pricing without sacrificing quality with models ranging in capacities from 1000 lbs to 3000 lbs.  We also offer custom-built cranes to suit your specific needs." />
        </Helmet>
        <Header name="Straddle Cranes" background={HeaderImg} />
        <ProductIntro url="straddle" models={Models.StraddleCranes} modelSelected={getSelected} img={IntroImg} />
        <FeaturesAndSpecs
            models={Models.StraddleCranes}
            product="straddle"
            features={FeatureList}
            columns={columns}
            type="cranes"
            featureImgSrc={featureImgSrc}
            query={Queries.CraneSpecs}
            queryName="craneSpecs"
            modelSelected={model}
            setModel={setModel}
            specImgSrc={specImgSrc} />
        <Documentation product="straddle" docs={CraneDocumentation} />
        <BeechDifference name="Straddle" title="The Beech Difference" />
    </StraddleStyles>
);

export const StraddleCranes = withProductPage(Straddle, Models.StraddleCranes, 'cranes', 'straddle');