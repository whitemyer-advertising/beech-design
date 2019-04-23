import React from "react";
import { BeechDifferenceStyles } from "./styles";
import ReactHtmlParser from 'react-html-parser';
import { Query } from "react-apollo";
import { Queries } from "../../../data/queries";
import BeechCompass from '../../../img/products/stackers/models/beech-difference-compass.png';

export const BeechDifference = ({name, title}) => (
    <Query query={Queries.Products}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            let copy = data.products.filter(prod => prod.name === name)[0].bd_copy;
            return (
                <BeechDifferenceStyles>
                    <div className="img-cont">
                        <img src={BeechCompass} alt="Beech Design Compass" />
                    </div>
                    <div className="copy-cont">
                        <h2>{title}</h2>
                        <div className="copy">
                            {ReactHtmlParser(copy)}
                        </div>
                    </div>
                </BeechDifferenceStyles>
            );
        }}
    </Query>
)