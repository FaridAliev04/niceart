import ChevronRight from "../../../../assets/images/icons/chevron-right";
import Home from "../../../../assets/images/icons/home";
import { useMainProductsStyles } from "./main-products.styles";
const MainProductsComponent = () => {
    const classes=useMainProductsStyles()
    return (
        <div className={`${classes.container}`}> 
            <Home/>
            <ChevronRight/>
            <span className={classes.about}>
                Products
            </span>
        </div>
    );
}

export default MainProductsComponent;
