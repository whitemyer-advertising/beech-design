import React from "react";
import { CategoryIntroStyles } from "../../Styles/Products/category-intro";
import { Products } from '../../../data/products';
import { DropDownList } from '../../DropDownList/dropdown-list';
import IntroImg from '../../../img/products/power-driven/category-intro.jpg';

const linkSelected = (el) => {
    const url = `/power-driven/${el.currentTarget.value.replace(' ', '-').toLowerCase()}`;
    window.location.href = url;
}

export const CategoryIntro = () => (
    <CategoryIntroStyles>
        <div className="category-copy-cont">
            <div className="category-copy">
                <div className="quick-product-nav">
                    <DropDownList options={Products.PowerDriven} setOption={linkSelected} defaultOption="Select a Power Driven Model" />
                </div>
                <h3>For ease of movement and longer travel distances</h3>
                <p>Beech Design & Manufacturing power driven cranes and stackers are designed and manufactured for safety, ergonomics and durability. They are ideal for transporting materials longer distances.</p>
                <p>All Beech Power Driven equipment is engineered to be low-maintenance for true ease of ownership - just check the battery's water level, grease the wheels and plug in the charger. Beech stocks the correct replacement parts, should they be needed.</p>
                <p>Built to exacting quality standards, our power driven equipment is second to none.</p>
            </div>
            <div className="category-img">
                <img src={IntroImg} alt="Power Driven Category Intro" />
            </div>
        </div>
    </CategoryIntroStyles>
)