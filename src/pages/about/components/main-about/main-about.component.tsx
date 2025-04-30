import ChevronRight from "../../../../assets/images/icons/chevron-right";
import Home from "../../../../assets/images/icons/home";
import { useMainAboutStyles } from "./main-about.styles";

const MainAboutComponent = () => {
    const classes=useMainAboutStyles()
    return (
        <div className={classes.container}> 
            <Home/>
            <ChevronRight/>
            <span className={classes.about}>
            About Us
            </span>
        </div>
    );
}

export default MainAboutComponent;
