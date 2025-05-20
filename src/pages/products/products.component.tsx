import ProductsTitleComponent from './components/products-title/products-title.component';
import EstateComponent from './components/estate/estate.component';
import MainProductsComponent from './components/main-products/main-products.component';

const ProductsComponent = () => {

    return (
        <div className="centered-container container  mx-auto">
            <MainProductsComponent/>
            <ProductsTitleComponent/>
            <EstateComponent/>
        </div>
    );
}

export default ProductsComponent;
