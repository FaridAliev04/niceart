import ArrowRight from "../../../../assets/images/icons/arrow-right";
import ArrowUp from "../../../../assets/images/icons/arrow-up";
import { useHelpYouStyles } from "./help-you.styles";

const HelpYouComponent = () => {
    const classes=useHelpYouStyles()
    return (
        <div className={classes.container}>
            <h1 className={classes.header}>
            We help you find
            the perfect loan
            </h1>
            <div className={classes.textDiv}>
                <p className={classes.text}>
                Malesuada pellentesque bibendum enim eu sit. Tincidunt eget mi est, egestas. Nunc, dignissim amet, purus amet. Amet dictum sit elit urna non purus, gravida commodo. 
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
