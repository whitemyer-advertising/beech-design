import React from 'react';
import { Helmet } from 'react-helmet';
import { AboutStyles } from "./styles";
import { Theme } from '../../components/Styles/theme';

export const About = () => (
    <AboutStyles>
        <Helmet>
            <title>Premium Material Handling Equipment | Beech Design & Manufacturing</title>
            <meta name="description" content="Beech Design & Manufacturing provides a full line of stackers for your material handling needs, including custom designed equipment.  All are factory proof-tested to 150% of capacity and come with a 2-year warranty on machine and 5-year warranty on weldment." />
        </Helmet>
        <div id="wrapper">
        <h1>About Us</h1>
        <Theme.Rule />
        <p>Beech Design & Manufacturing is a division of Miller Studio, Incorporated. Founded in 1934, MSI was known for its proud tradition of designing and building all the special equipment they needed.   And in 1996, when an employee had an idea to produce high-quality material handling equipment at fair prices and offer next-day delivery, Beech Design & Manufacturing was formed.
<br /><br />Today Beech Design & Manufacturing designs and manufactures premium material handling equipment including stackers, floor cranes, scissor lift tables and vertical reciprocating conveyors.  Both standard models and custom built units, designed to solve special problems, are available.
<br /><br />Our focus is on the industrial / professional market; therefore, our equipment must meet exceptionally high standards for quality and safety. We do this by exceeding the ASME and ANSI design and testing standards set for the various types of machines we build.
</p>
        </div>
    </AboutStyles>
);