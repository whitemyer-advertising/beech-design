import React from "react";
import ProductSectionContainer from "../../components/product-section-container";
import { Helmet } from 'react-helmet';
import { Featured } from "../../components/Featured/featured";
import { Custom } from "../../components/Custom/custom";
import { Company } from "../../components/Company/company";
import { Theme } from "../../components/Styles/theme";
import { Grid } from "../../components/Styles/grid";
import { ImgRotator } from "../../components/ImgRotator/img-rotator";
import { HomeStyles } from "./styles";

export const Home = () => (
    <HomeStyles>
        <Helmet>
            <title>Home | Beech Design & Manufacturing</title>
            <meta name="description" content="Home page meta" />
        </Helmet>
        <Grid className="home-intro-copy">
            <ImgRotator />
            <div className="home-copy">
                <h1>Premium Quality Material Handling Equipment</h1>
                <Theme.Rule />
                <p>Beech Design & Manufacturing provides material handling equipment at competitive prices without sacrificing product quality. We’re the source for stackers, cranes, lift tables, VRCs, power-driven cranes and stackers or custom-designed equipment.</p>
            </div>
        </Grid>
        <ProductSectionContainer />
        <Featured />
        <Custom />
        <Company />
    </HomeStyles>
);