import React from "react";
import { LayerStyles } from "./styles";

export const Layer = ({id, color}) => (
    <LayerStyles xmlns="http://www.w3.org/2000/svg" id={`layer-${id}`}>
        <title>Layer Shape</title>
        <path d="M419 37 210 0 0 37 209 74 419 37z" fill={color} />
    </LayerStyles>
);