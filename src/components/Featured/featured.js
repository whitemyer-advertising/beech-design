import React from "react";
import HydraulicStacker from '../../img/featured/platform-stacker.png';
import { Button } from "../button";
import { FeaturedStyles } from './styles';
import { Grid } from '../Styles/grid';
import { Theme } from '../Styles/theme';
import { Query } from "react-apollo";
import { Queries } from "../../data/queries";
// import { Models } from "../../data/models";

export const Featured = () => (
    <Grid>
        <Query query={Queries.Products}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            let product = data.products.find(prod => prod.featured === true);
            return (
                <FeaturedStyles>
                    <div className="img-cont">
                        <img src={HydraulicStacker} alt={product.name} />
                    </div>
                    <div className="featured-product-copy">
                        <h2>Featured Product</h2>
                        <Theme.Rule />
                        <h4>{product.name} {product.category.name}</h4>
                        <p>Foot Pedal Pump</p>
                        <Button url={`/${product.category.name.toLowerCase()}/${product.url}`} label="Learn More" />
                    </div>
                </FeaturedStyles>
                    );
                }}
            </Query>
    </Grid>
)