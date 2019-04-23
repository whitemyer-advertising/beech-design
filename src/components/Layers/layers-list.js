import React from 'react';
import { Query } from "react-apollo";
import { Layer } from './Layer/layer-svg';
import { Queries } from "../../data/queries";
import { LayerListStyles } from './styles';

export const LayersList = ({expandMobile, getDetails}) => (
    <Query query={Queries.Categories}>
        {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
            
        return (
            <LayerListStyles>
                { data.categories.map(({ id, name }) =>
                    <li key={id} id={`label-${id}`} data-product-name={name} onClick={window.innerWidth <= 640 ? expandMobile : getDetails}>
                        <div>{name}</div>
                        <Layer key={id} id={id}/>
                    </li>
                )}
            </LayerListStyles>
        )
    }}
  </Query>
);