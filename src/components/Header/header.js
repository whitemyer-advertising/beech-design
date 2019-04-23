import React from "react";
import { Grid } from "../../components/Styles/grid";
import { HeaderStyles } from './styles';

export const Header = ({background, name}) => (
    <HeaderStyles background={background}>
        <Grid>
            <h1>{name}</h1>
        </Grid>
    </HeaderStyles>
);