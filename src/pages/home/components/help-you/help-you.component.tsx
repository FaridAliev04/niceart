import { useCallback } from "react";
import ArrowRight from "../../../../assets/images/icons/arrow-right";
import ArrowUp from "../../../../assets/images/icons/arrow-up";
import { useHelpYouStyles } from "./help-you.styles";

const HelpYouComponent = ({data}:any) => {
    const classes=useHelpYouStyles()
    const dataFind=useCallback((data?.find((e:any)=>e.id==1)),[data])
    return (
        <div className={`container mx-auto mt-80 row   gy-3`}>
            <h1 className={`col-lg-6  ${classes.header}`}>
            {dataFind?.title}
            </h1>
            <div className={` col-lg-6  ${classes.textDiv}`}>
                <p className={classes.text}>
                {dataFind?.description}
                </p>
                <div className={classes.btnDiv}>
                    <button className={classes.productBtn}>
                             Products
                            <ArrowRight/>
                    </button>
                    <button className={classes.aboutBtn}>
                            About NICART
                            <ArrowUp/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HelpYouComponent;
