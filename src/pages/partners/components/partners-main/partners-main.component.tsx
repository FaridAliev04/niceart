import ChevronRight from "../../../../assets/images/icons/chevron-right";
import Home from "../../../../assets/images/icons/home";
import { usePartnersMainStyles } from "./partners-main.styles";
const PartnersMainComponent = () => {
    const classes=usePartnersMainStyles()
    return (
        <div className={classes.container}> 
            <Home/>
            <ChevronRight/>
            <span className={classes.about}>
            Partners
            </span>
        </div>
    );
}

export default PartnersMainComponent;
