import React from 'react';
import { Helmet } from 'react-helmet';
import { TiltTableStyles } from './styles';
import { Header } from '../../../components/Header/header';
import HeaderImg from '../../../img/products/lift-tables/header.jpg';
import { ProductIntro } from '../../../components/Products/LiftTables/product-intro';
import IntroImg from '../../../img/products/lift-tables/models/loadredi-tilt-lift-tables.jpg';
import { FeaturesAndSpecs } from '../../../components/Products/FeaturesAndSpecs/features-and-specs';
import { FeatureList } from '../../../data/features/lift-tables';
import { Queries } from '../../../data/queries';
import { LiftTableDocumentation } from '../../../data/documentation/lift-tables';
import { columns } from './spec-columns';
import { Documentation } from '../../../components/Products/Documentation/documentation';
import { BeechDifference} from '../../../components/Products/BeechDifference/beech-difference';

export const TiltTables = ({specImgSrc, featureImgSrc}) => (
    <TiltTableStyles>
        <Helmet>
            <title>LoadRedi™ Tilt Tables For Work Positioning & Ergonomic Handling</title>
            <meta name="description" content="LoadRedi™ tilt tables from Beech Design enable work to be positioned up to 45 degrees, improving workplace safety by decreasing the need for workers to stretch, lift and bend." />
        </Helmet>
        <Header name="LoadRedi&trade; Tilt Tables" background={HeaderImg} />
        <ProductIntro url="loadredi-tilt" img={IntroImg} />
        <FeaturesAndSpecs
            models=''
            product="tilt"
            features={FeatureList}
            columns={columns}
            type="lift-tables"
            featureImgSrc={featureImgSrc}
            query={Queries.LiftTableSpecs}
            queryName="liftTableSpecs"
            modelSelected=''
            specImgSrc={specImgSrc} />
        <Documentation product="tilt" docs={LiftTableDocumentation} />
        <BeechDifference name="Tilt" title="Built to Beech Standards" />
    </TiltTableStyles>
);