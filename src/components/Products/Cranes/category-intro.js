import React from "react";
import { CategoryIntroStyles } from "../../Styles/Products/category-intro";
import { Products } from '../../../data/products'
import { DropDownList } from '../../DropDownList/dropdown-list';
import IntroImg from '../../../img/products/cranes/category-intro.jpg';
import { GoPowerDriven } from '../GoPowerDriven/go-power-driven';
import PowerDrivenStackerImg from '../../../img/products/stackers/power-driven-stacker.png';

const linkSelected = (el) => {
    const url = `/cranes/${el.currentTarget.value.replace(' ', '-').toLowerCase()}`;
    window.location.href = url;
}

export const CategoryIntro = () => (
    <CategoryIntroStyles>
        <div className="category-copy-cont">
            <div className="category-copy">
                <div className="quick-product-nav">
                    <DropDownList options={Products.Cranes} setOption={linkSelected} defaultOption="Select a Crane Type" />
                </div>
                <h3>For everyday lifting and lowering with precise control</h3>
                <p>Beech Design cranes are the solution for everyday lifting needs in industrial facilities. We offer a variety of types to help you with lifting and lowering product, parts and other goods when an overhead lift is not available. Designed to keep your operation running more efficiently, every Beech crane features a unique combination of high-quality engineering and construction, built-in safety features, outstanding warranty, and competitive pricing.</p>
                <p>Our straddle cranes are ideal for everyday lifting in industrial facilities. Or choose a counterweighted model for wide, awkward loads. Our Power Lift cranes ……</p>
            </div>
            <div className="category-img">
                <img src={IntroImg} alt="Cranes Category Intro" />
            </div>
        </div>
        <GoPowerDriven src={PowerDrivenStackerImg} desc="Power Driven Cranes" />
    </CategoryIntroStyles>
)