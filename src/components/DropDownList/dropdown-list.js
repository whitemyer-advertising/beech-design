import React from "react";
import { DropDownListStyles } from "./styles";

export const DropDownList = ({id, options, setOption, defaultOption}) => (
    <DropDownListStyles>
        <select onChange={setOption} id={id} defaultValue={(defaultOption !== undefined ? defaultOption : '')}>
            {(defaultOption !== undefined && <option disabled>{defaultOption}</option>)}
            {options.map(option =>
                <option key={option.id}>{option.name}</option>
            )}
        </select>
    </DropDownListStyles>
)