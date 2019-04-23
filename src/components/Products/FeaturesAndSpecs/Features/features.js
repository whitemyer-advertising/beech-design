import React from "react";
import { FeatureStyles } from "./styles";
import { MoreInfo } from "../../MoreInfo/more-info";
import { ListStyles } from "../../../Styles/list";
import { ArrowLeft } from '../../../../components/arrow-left';

export const Features = ({product, model, features, setSpecs, modelSrc}) => (
    <FeatureStyles>
        <div className="content">
            <button onClick={setSpecs} className="slide-label specs" value="specifications">
                <ArrowLeft setColor="#fff" />
                SPECIFICATIONS
            </button>
            <div className="features-list-cont">
                <div className="img-cont">
                    <img src={modelSrc} alt="Model Features" />
                </div>
                <ListStyles>
                    {features.filter(filter => filter.products.find(prod => prod.name === product
                        && (prod.models !== null ? prod.models.includes(model) : model))).map(data =>
                            <li key={data.id}>{data.feature}</li>
                    )}
                </ListStyles>
            </div>
            <MoreInfo />
        </div>
    </FeatureStyles>
)