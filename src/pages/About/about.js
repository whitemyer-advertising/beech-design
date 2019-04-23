import React from 'react';
import { Helmet } from 'react-helmet';
import { AboutStyles } from "./styles";

export const About = () => (
    <AboutStyles>
        <Helmet>
            <title>Premium Material Handling Equipment | Beech Design & Manufacturing</title>
            <meta name="description" content="Beech Design & Manufacturing provides a full line of stackers for your material handling needs, including custom designed equipment.  All are factory proof-tested to 150% of capacity and come with a 2-year warranty on machine and 5-year warranty on weldment." />
        </Helmet>
        <p>Beech Design & Manufacturing was formed in 1996 as a division of Miller Studio, Incorporated. MSI has 75 years of experience in manufacturing and distribution. The Beech Design & Manufacturing Division designs and manufactures premium material handling equipment. Both standard models and custom built units, designed to solve special problems, are available.</p>
        <p>Our focus is on the industrial / professional market; therefore, our equipment must meet exceptionally high standards for quality and safety. We do this by exceeding the ASME and ANSI design and testing standards set for the various types of machines we build.</p>
        <p>We market our equipment only through material handling and industrial supply distributors. Call for pricing and availability.</p>
    </AboutStyles>
);