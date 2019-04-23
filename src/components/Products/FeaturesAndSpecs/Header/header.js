import React from "react";
import { HeaderStyles } from "./styles";
import { DropDownList } from "../../../DropDownList/dropdown-list";
import { Active } from './IsActive/active';

export const Header = ({models, featSpecIsActive, modelHasChanged}) => (
    <HeaderStyles id='feature-header'>
        {models !== '' ?
            <DropDownList id="featuresAndSpecsDropDown" options={models} setOption={modelHasChanged} />
        : ''}
        <Active setSelected={featSpecIsActive} />
    </HeaderStyles>
)