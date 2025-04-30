import HelpYouComponent from './components/help-you/help-you.component';
import AboutComponent from './components/about/about.component';
import ProductsComponent from './components/products/products.component';
import ApplyComponent from '../../core/shared/apply/apply.component';

const HomeComponet = () => {
    return (
        <div>
            <HelpYouComponent/>
            <AboutComponent/>
            <ProductsComponent/>
            <ApplyComponent/>
        </div>
    );
}

export default HomeComponet;
