import React from "react";
import CraneImg from "../../../img/category-2.png";
import { Query } from "react-apollo";
import { Queries } from "../../../data/queries";
import { Button } from "../../button";
import { ProductStyles } from "./styles";

export const ProductDetail = () => (
    <Query query={Queries.Categories}>
        {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.categories.map(({ id, name, headline, description }) => (
            <ProductStyles key={id} data-product-name={name} className="single-product">
                <div className="product-detail-copy">
                    <div className="wrapper">
                        <h2>{name}</h2>
                        <h4>{headline}</h4>
                        <p>{description}</p>
                        <Button url={`/${name.toLowerCase().replace(/ /g, '-')}`} label={`Explore ${name}`} />
                    </div>
                </div>
                <div className="img-cont">
                    <img src={CraneImg} alt="Category Name"/>
                </div>
            </ProductStyles>
        ));
    }}
    </Query>
);