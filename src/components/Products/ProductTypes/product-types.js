import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { Queries } from "../../../data/queries";
import { ProductTypesStyles } from "./styles";
import { LastLink } from "./last-link";

export const ProductTypes = ({category, CategoryImages}) => (
    <ProductTypesStyles>
        <div className="product-types">
            <h2>{category !== 'Power Driven' ? category.slice(0, -1) : category} Types</h2>
            <div className="product-type-links-cont">
                <Query query={Queries.Products}>
                    {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                        return data.products.filter(product => product.category.name === category).map(({ id, name, blurb, url }) => (
                            <div key={id} className="product-type-link">
                                <Link to={`/${category.replace(' ', '-').toLowerCase()}/${url}`}>
                                    {<CategoryImages name={name.replace(/ /g, '')} /> }
                                    {category !== 'Power Driven' ?
                                        <h4>{`${name} ${category}`}</h4> :
                                        <h4>{`${category} ${name}`}</h4>
                                    }
                                    <p>{blurb}</p>
                                </Link>
                            </div>
                        ))
                    }}
                </Query>
                <LastLink category={category} />
            </div>
        </div>
    </ProductTypesStyles>
)