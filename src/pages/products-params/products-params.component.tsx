import ApplyComponent from '../../core/shared/apply/apply.component';
import ParamsCreditComponent from './components/params-credit/params-credit.component';
import MainParamsComponent from './components/params-main/params-main.component'
import ParamsTextComponent from './components/params-text/params-text.component';

const ProductsParamsComponent = () => {
    return (
        <div>
            <MainParamsComponent/>          
            <ParamsTextComponent/>
            <ParamsCreditComponent/>
            <ApplyComponent/>
        </div>
    );
}

export default ProductsParamsComponent;
