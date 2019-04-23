import React from 'react';
import { ProductSection } from './ProductSection/product-section';

class ProductSectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.hideProductCategories = this.hideProductCategories.bind(this);
        this.showProductCategories = this.showProductCategories.bind(this);
        this.showProductDetails = this.showProductDetails.bind(this);
        this.hideProductDetails = this.hideProductDetails.bind(this);
        this.expandProductsMobile = this.expandProductsMobile.bind(this);
    }

    hideProductCategories(ev) {
        var items = document.querySelectorAll('.product-categories li');
        var selectedCategory = ev.currentTarget.dataset.productName;
        for (var i = 0; i < items.length; i++) {
            items[i].querySelector('div').classList.add('hide');
            if(items[i] !== ev.currentTarget) {
                items[i].classList.add('hide');
            }
        }
        this.showProductDetails(selectedCategory);
        ev.currentTarget.classList.add('slideDown');
    }

    showProductCategories() {
        var items = document.querySelectorAll('.product-categories li');
        setTimeout(() => {
            for(var i = 0; i < items.length; i++) {
                items[i].classList.remove('slideDown');
                items[i].classList.remove('hide');
                items[i].querySelector('div').classList.remove('hide');
            }
        }, 500);
    }

    showProductDetails(cat) {
        if(cat !== null) {
            setTimeout(() => {
                if(window.innerWidth > 640) {
                    document.querySelector('.single-product[data-product-name="' + cat + '"]').style.display = 'flex';
                } else {
                    document.querySelector('.single-product[data-product-name="' + cat + '"]').style.display = 'block';
                }
                document.querySelector('.product-details').classList.remove('hide');
            }, 250);
        }
    }

    hideProductDetails() {
        document.querySelector('.product-details').classList.add('hide');
        var singles = document.querySelectorAll('.single-product');
        setTimeout(() => {
            for(var i = 0; i < singles.length; i++) {
                singles[i].style.display = 'none';
            }
            if(window.innerWidth > 640) {
                this.showProductCategories();
            }
        }, 250);
    }
    
    expandProductsMobile(ev) {
        var cat = ev.currentTarget.querySelector('div').innerHTML;
        var parent = document.querySelector('.product-details');
        if(window.innerWidth <= 640) {
            ev.currentTarget.classList.toggle('expanded');
            if(ev.currentTarget.classList.contains('expanded')) {
                this.showProductDetails(cat);
                parent.classList.add(cat.replace(' ', '-').toLowerCase());
            } else {
                this.hideProductDetails();
                parent.classList.remove(cat.replace(' ', '-').toLowerCase());
            }
        }
    }
    render() {
        return <ProductSection showDetails={this.hideProductCategories} showLayers={this.hideProductDetails} expand={this.expandProductsMobile} />
    }
}

export default ProductSectionContainer;