import { useCallback } from "react";
import { useAboutUsStyles } from "./about-us.styles";

const AboutUsComponent = ({data}:any) => {
    const classes=useAboutUsStyles()
    const dataFind=useCallback((data?.find((e:any)=>e.id==5)),[data])
    return (
        <div className={classes.container}>
            <div>
                <h1 className={classes.mainHeader}>
                {dataFind?.title}
                </h1>
            </div>
            <div className={classes.texts}>
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
