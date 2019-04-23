import React from "react";
import ReactHtmlParser from 'react-html-parser';
import { ProductIntroStyles } from "../../Styles/Products/product-intro";
import { Query } from "react-apollo";
import { Queries } from "../../../data/queries";
import { DropDownList } from "../../DropDownList/dropdown-list";
import IntroImg from '../../../img/products/stackers/models/platform-stackers.jpg';
import { Options } from '../../../data/options/vrcs';
import { ListStyles } from '../../Styles/list';

export const ProductIntro = ({url, models, modelSelected}) => (
    <ProductIntroStyles>
        <div className="product-copy-cont">
            <Query query={Queries.Product} variables={{ url }}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    return (
                        <div className="product-copy">
                            <div className="shortcut-nav">
                                <DropDownList options={models} setOption={modelSelected} defaultOption="Select a Model" />
                                <a href="#documentation">Documentation</a>
                            </div>
                            <h3>{data.product.headline}</h3>
                            {ReactHtmlParser(data.product.description)}

                            <div className="product-options">
                                <h2>{data.product.name} VRC Options</h2>
                                <p>Choose from:</p>
                                <ListStyles>
                                    {Options.filter(option => option.products.includes(data.product.name.toLowerCase())).map(item =>
                                        <li key={item.id}>{item.name}</li>
                                    )}
                                </ListStyles>
                            </div>
                        </div>
                    );
                }}
            </Query>
            <div>
                <img src={IntroImg} alt="Cranes Product Intro" />
            </div>
        </div>
    </ProductIntroStyles>
)