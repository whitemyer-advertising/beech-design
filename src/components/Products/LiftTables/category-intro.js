import React from "react";
import { CategoryIntroStyles } from "../../Styles/Products/category-intro";
import { Products } from '../../../data/products'
import { DropDownList } from '../../DropDownList/dropdown-list';
import IntroImg from '../../../img/products/lift-tables/category-intro.jpg';

const linkSelected = (el) => {
    const url = `/lift-tables/${el.currentTarget.value.replace(' ', '-').toLowerCase()}`;
    window.location.href = url;
}

export const CategoryIntro = () => (
    <CategoryIntroStyles>
        <div className="category-copy-cont">
            <div className="category-copy">
                <div className="quick-product-nav">
                    <DropDownList options={Products.LiftTables} setOption={linkSelected} defaultOption="Select a Lift Table Type" />
                </div>
                <h3>For work positioning and ergonomic handling </h3>
                <p>Beech Design Lift Tables are ideal for parts handling and assembly work, allowing operators to raise the workstation to a level that allows for easier loading or sorting.</p>
                <p>Designed to lower your material handling costs while increasing productivity, the Beech Load Redi™ line includes stationary and portable scissor lift tables as well as tilt table models.</p>
                <p>If our standard line of lift and tilt tables doesn’t suit your specific need, our Beech line of lift tables is custom designed specifically to the customers’ application.</p>
            </div>
            <div className="category-img">
                <img src={IntroImg} alt="Lift Tables Category Intro" />
            </div>
        </div>
        {/* <GoPowerDriven src={PowerDrivenStackerImg} desc="Power Driven Lift Tables" /> */}
    </CategoryIntroStyles>
)