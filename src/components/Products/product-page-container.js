import React from 'react';

const scrollIntoView = require('scroll-into-view');

export const withProductPage = (ProductPage, defaultModel, type, product) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = { model: (defaultModel !== '' ? defaultModel[0].name.toLowerCase() : ''), specImgSrc: '', featureImgSrc: '' }

            this.getSelected = this.getSelected.bind(this);
            this.setModel = this.setModel.bind(this);
            this.setSource = this.setSource.bind(this);
        }

        getSelected = (event) => {
            var dd = document.getElementById('featuresAndSpecsDropDown');
            dd.selectedIndex = event.target.selectedIndex - 1;
            this.setModel(event);
            scrollIntoView(dd, { align: { top: 0 } });
            event.target.selectedIndex = 0;
        }

        setModel = (selected) => {
            this.setState({ model: selected.target.value.toLowerCase() }, () => {
                this.setSource();
            });
        }
        setSource() {
            try {
                const specImgSrc = require(`../../img/products/${type}/specs/${product}-${this.state.model.replace(/\s+/g, "-").toLowerCase()}-specs-drawing.png`);
                const featureImgSrc = require(`../../img/products/${type}/features/${product}-${this.state.model.replace(/\s+/g, "-").toLowerCase()}.png`);
                this.setState({ specImgSrc, featureImgSrc });
            } catch(e) {
                this.setState({ specImgSrc: '', featureImgSrc: '' });
            }
        }
        componentDidMount() {
            this.setSource();
        }
        
        render() {
            return <ProductPage {...this.props} {...this.state} setModel={this.setModel} getSelected={this.getSelected} />
        }
    }
}