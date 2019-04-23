import React from "react";
import CustomBuiltImage from '../../img/custom-built.png';
import { Theme } from "../Styles/theme";
import { Grid } from '../Styles/grid';
import { Button } from "../button";
import { CustomStyles } from './styles';

export const Custom = () => (
    <CustomStyles>
        <Grid className="custom-cont">
            <div className="img-cont">
                <img src={CustomBuiltImage} alt="Custom Built" />
            </div>
            <div className="custom-built-copy">
                <div className="wrapper">
                    <h2>Custom-Built Material Handling Equipment</h2>
                    <Theme.Rule />
                    <p>At Beech Design & Manufacturing, we understand that our standard equipment may not always suit every need. If you don’t find the perfect match, contact us and we’ll work with you to build to your specification.</p>
                    <Button url="/custom" label="Custom Capablities" />
                </div>
            </div>
        </Grid>
    </CustomStyles>
)