import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { FeaturesAndSpecsStyles } from "./styles";
import { Header } from "./Header/header";
import { Features } from "./Features/features";
import { Specifications } from "./Specifications/specifications";

export class FeaturesAndSpecs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: 'features' }

        this.setActive = this.setActive.bind(this);
    }
    setActive = (val) => {
        if(val.currentTarget.value === 'features') {
            this.setState({
                selected: 'features'
            })
            document.querySelector('#featureSelect').checked = true;
        }
        else {
            this.setState({
                selected: 'specifications'
            })
            document.querySelector('#specSelect').checked = true;
        }
    }

    render() {
        return (
            <FeaturesAndSpecsStyles>
                <Header models={this.props.models} featSpecIsActive={this.setActive} modelHasChanged={this.props.setModel} />
                <TransitionGroup>
                    <CSSTransition
                        key={this.state.selected}
                        timeout={{ enter: 600, exit: 600 }}
                        classNames={ this.state.selected === 'features' ? 'slide-in-right' : 'slide-in-left' }>
                        {this.state.selected === 'features' ?
                            <Features
                                product={this.props.product}
                                model={this.props.modelSelected}
                                features={this.props.features}
                                setSpecs={this.setActive}
                                modelSrc={this.props.featureImgSrc} /> : 
                            <Specifications
                                product={this.props.product}
                                model={this.props.modelSelected}
                                specifications={this.props.specifications}
                                specTableName={this.props.specTableName}
                                columns={this.props.columns}
                                type={this.props.type}
                                query={this.props.query}
                                queryName={this.props.queryName}
                                setFeatures={this.setActive}
                                drawingSrc={this.props.specImgSrc} />
                        }
                    </CSSTransition>
                </TransitionGroup>
            </FeaturesAndSpecsStyles>
        )
    }
}