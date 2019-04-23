import React from "react";
import { SpecStyles } from "./styles";
import { Query } from "react-apollo";
import ReactTable from 'react-table'
import "react-table/react-table.css";
import { MobileSpecTables } from './Mobile/mobile-spec-tables';
import { MoreInfo } from "../../MoreInfo/more-info";
import { ArrowRight } from '../../../../components/arrow-right';

export const Specifications = ({product, model, columns, query, queryName, setFeatures, drawingSrc}) => (
    <Query query={query} variables={{ product, model }}>
        {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
            
            return (
                <SpecStyles>
                    <div className="content">
                        <button onClick={setFeatures} className="slide-label features" value="features">
                            <ArrowRight setColor="#fff" />
                            FEATURES
                        </button>
                        {window.innerWidth > 1200 ?
                        <ReactTable
                            data={data[queryName]}
                            columns={columns}
                            showPagination={false}
                            defaultPageSize={data[queryName].length}
                            className="-striped" /> :
                        <MobileSpecTables specs={data[queryName]} columns={columns} />}
                        <hr />
                        <div className="spec-drawing-cont">
                            <img className="spec-drawing" src={drawingSrc} alt="Specification Drawing" />
                            <MoreInfo />
                        </div>
                    </div>
                </SpecStyles>
            )
        }}
    </Query>
)