import aboutHome from '../../../../assets/images/statics/about-home.png'
import abouUsHome from '../../../../assets/images/statics/about-us-home.png'
import { useAboutHomeStyle } from './about.style';
const AboutComponent = () => {
    const classes=useAboutHomeStyle()
    return (
        <div className={`centered-container container mx-auto mt-4 ${classes.container}`}>
            <div className={classes.aboutMainDiv}>
                <div className={classes.section}>
                    <div className={classes.imgDiv}>
                        <img src={aboutHome} alt="" />
                    </div>

                        <p className={classes.text}>
                        Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu, augue. Egestas et amet neque placerat aliquam tempor. Ultricies natoque lacus, id natoque cras. Erat aliquam sollicitudin risus semper molestie. Ut mattis nisl faucibus vel tincidunt.<br/>
                        Et in laoreet faucibus urna quis. Tempus in condimentum malesuada ut molestie et in. Lobortis neque aliquam felis ac ac augue elit.
                        </p>

                </div>
                <div className={classes.sectionSecond}>
                    <div className={classes.textsDiv}>
                        <p className={classes.aboutUsHeader}>
                        ABOUT US
                        </p>
                        <h1 className={classes.mainHeader}>
                        Lectus mauris pulvinar
                        sit.
                        </h1>
                        <p className={classes.texts}>
                        Malesuada tortor fringilla ut faucibus. Urna tellus lectus platea turpis non. Tellus odio eu ante tincidunt vivamus nunc nibh arcu, augue. Egestas et amet neque placerat aliquam tempor. Ultricies natoque lacus, id natoque cras. Erat aliquam sollicitudin risus semper molestie. Ut mattis nisl faucibus vel tincidunt.
                        </p>
                        <div className={classes.learnMoreDiv}>
                            <p className={classes.learnMore}>
                            Learn more
                            </p>
                            <div className={classes.line}>

                            </div>
                        </div>
                    </div>
                    <div className={classes.secondImg}>
                        <img src={abouUsHome} alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default AboutComponent;
