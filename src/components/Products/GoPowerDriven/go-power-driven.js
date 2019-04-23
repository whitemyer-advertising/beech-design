import React from "react";
import { Button } from "../../button";
import { PowerDrivenStyles } from "./styles";

export const GoPowerDriven = ({src, desc}) => (
    <PowerDrivenStyles>
        <div className="go-power-driven">
            <div className="go-power-driven-img">
                <img src={src} alt={desc} />
            </div>
            <div className="go-power-driven-copy">
                <h4>For heavier duty demands, check out our power-driven models.</h4>
                <Button url="/power-driven" label={desc} />
            </div>
        </div>
    </PowerDrivenStyles>
)