import React from "react";
import { Grid } from "../Styles/grid";
import { Theme } from '../Styles/theme';
import { CompanyStyles } from "./styles.js";
import { Button } from "../button";

export const Company = () => (
    <CompanyStyles>
        <Grid className="wrapper">
            <h2>Who is Beech Design & Manufacturing?</h2>
            <Theme.VideoCont>
                <iframe src="https://www.youtube.com/embed/SIr_kFxIwSU" title="About Us" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
            </Theme.VideoCont>
            <p>Formed in 1996 as a division of  <a href="http://www.miller-studio.com/">MSI</a>, a company with experience in manufacturing and distribution dating to 1934. The Beech Division designs  and manufactures premium material handling equipment. Both standard models and custom built units, designed to solve special problems, are available. Watch the video below to learn more about our capabilities.</p>
            <div className="button-cont">
                <Button url="/about" label="Company Background" />
            </div>
        </Grid>
    </CompanyStyles>
);