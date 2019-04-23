import React from "react";
import { CategoryIntroStyles } from "../../Styles/Products/category-intro";
import { Products } from '../../../data/products'
import { DropDownList } from '../../DropDownList/dropdown-list';
import IntroImg from '../../../img/products/stackers/category-intro.jpg';
import { GoPowerDriven } from '../GoPowerDriven/go-power-driven';
import PowerDrivenStackerImg from '../../../img/products/stackers/power-driven-stacker.png';

const linkSelected = (el) => {
    const url = `/stackers/${el.currentTarget.value.replace(' ', '-').toLowerCase()}`;
    window.location.href = url;
}

export const CategoryIntro = () => (
    <CategoryIntroStyles>
        <div className="category-copy-cont">
            <div className="category-copy">
                <div className="quick-product-nav">
                    <DropDownList options={Products.Stackers} setOption={linkSelected} defaultOption="Select a Stacker Type" />
                </div>
                <h3>For easier racking, loading and unloading of materials</h3>
                <p>Beech Design Stackers are ideal for your light- and medium-duty material handling requirements. Designed to keep your processes running more efficiently, every Beech Stacker features a unique combination of high-quality engineering and construction, built-in safety features, outstanding warranty, and competitive pricing.</p>
                <p>For light- and medium-duty requirements, we offer both hydraulic and winch operated models in both fork and pallet configurations. Our counterbalanced models are best suited for applications such as side-by-side stacking, tilting of loads or in situations where obstructions may be a problem.</p>
            </div>
            <div className="category-img">
                <img src={IntroImg} alt="Stackers Category Intro" />
            </div>
        </div>
        <GoPowerDriven src={PowerDrivenStackerImg} desc="Power Driven Stackers" />
    </CategoryIntroStyles>
)