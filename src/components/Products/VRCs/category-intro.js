import React from "react";
import { CategoryIntroStyles } from "../../Styles/Products/category-intro";
import { Products } from '../../../data/products'
import { DropDownList } from '../../DropDownList/dropdown-list';
import IntroImg from '../../../img/products/stackers/category-intro.jpg';

const linkSelected = (el) => {
    const url = `/vrcs/${el.currentTarget.value.replace(' ', '-').toLowerCase()}`;
    window.location.href = url;
}

export const CategoryIntro = () => (
    <CategoryIntroStyles>
        <div className="category-copy-cont">
            <div className="category-copy">
                <div className="quick-product-nav">
                    <DropDownList options={Products.VRCs} setOption={linkSelected} defaultOption="Select a VRC Type" />
                </div>
                <h3>Move material vertically without the cost of a freight elevator</h3>
                <p>Beech Design & Manufacturing’s MATERIALIFT® VRCs can save you up to 75% of a freight elevator’s cost. Designed to be space-efficient, versatile and easy-to-install, these vertical lifts offer virtually unlimited vertical travel, for moving materials from one elevation to another, with speeds up to 80 FPM for fast cycle times, and standard capacities up to 20,000 pounds. Our custom-engineered units can handle even greater loads.</p>
                <p>Beech offers a choice of VRC systems, accessories and custom-engineered options to suit hundreds of applications. And only Beech can bring you the durability and reliable service that comes from decades of experience in lifting and material handling systems, scissor lifts, cranes and stackers.</p>
                <p>Explore our many standard and custom VRC options to find the model best suited to your vertical freight movement needs.</p>
            </div>
            <div className="category-img">
                <img src={IntroImg} alt="VRCs Category Intro" />
            </div>
        </div>
    </CategoryIntroStyles>
)