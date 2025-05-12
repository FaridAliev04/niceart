import HelpYouComponent from './components/help-you/help-you.component';
import AboutComponent from './components/about/about.component';
import ProductsComponent from './components/products/products.component';
import ApplyComponent from '../../core/shared/apply/apply.component';
import { useLeads } from '../../core/shared/mainAction/action/leads.query';

const HomeComponet = () => {
    const {data}=useLeads()
    return (
        <div>
            <HelpYouComponent data={data}/>
            <AboutComponent/>
            <ProductsComponent data={data} />
            <ApplyComponent/>
        </div>
    );
}

export default HomeComponet;
