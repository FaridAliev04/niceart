import { useCallback } from "react";
import { useAboutUsStyles } from "./about-us.styles";

const AboutUsComponent = ({data}:any) => {
    const classes=useAboutUsStyles()
    const dataFind=useCallback((data?.find((e:any)=>e.id==5)),[data])
    return (
        <div className={`centered-container container mx-auto row ${classes.container}`}>
            <div className={`col-lg-6 ${classes.mainHeaderDiv}`}>
                <h1 className={classes.mainHeader}>
                {dataFind?.title}
                </h1>
            </div>
            <div className={`col-lg-6 ${classes.texts}`}>
                <p className={classes.aboutUs}>
                {dataFind?.tag}
                </p>
                <h1 className={classes.textsHeader}>
                {dataFind?.heading}
                </h1>
                <p className={classes.text}>
                {dataFind?.description}
                </p>
            </div>
        </div>
    );
}

export default AboutUsComponent;
