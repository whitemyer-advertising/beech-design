import React from "react";
import { IsActiveStyles } from "./styles";

export const Active = ({setSelected}) => (
    <IsActiveStyles>
        <input id="featureSelect" defaultChecked type="radio" name="fs" value="features" onClick={setSelected} />
        <label htmlFor="featureSelect">Features</label>
        <span> | </span>
        <input id="specSelect" type="radio" name="fs" value="specifications" onClick={setSelected} />
        <label htmlFor="specSelect">Specifications</label>
    </IsActiveStyles>
);