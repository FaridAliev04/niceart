import React from 'react';
import { useProductsStyles } from './products.styles';
import MainProductsComponent from './components/main-products/main-products.component';
import ProductsTitleComponent from './components/products-title/products-title.component';
import EstateComponent from './components/estate/estate.component';

const ProductsComponent = () => {
    const classes=useProductsStyles()
    return (
        <div className={classes.container}>
            <MainProductsComponent/>
            <ProductsTitleComponent/>
            <EstateComponent/>
        </div>
    );
}

export default ProductsComponent;
