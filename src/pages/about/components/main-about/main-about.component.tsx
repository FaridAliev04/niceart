import { useCallback } from "react";
import ChevronRight from "../../../../assets/images/icons/chevron-right";
import Home from "../../../../assets/images/icons/home";
import { useMainAboutStyles } from "./main-about.styles";

const MainAboutComponent = ({data}:any) => {
    const classes=useMainAboutStyles()
    return (
        <div className={` centered-container container  mx-auto   ${classes.container}`}> 
            <Home/>
            <ChevronRight/>
            <span className={classes.about}>
            About Us
            </span>
        </div>
    );
}

export default MainAboutComponent;
