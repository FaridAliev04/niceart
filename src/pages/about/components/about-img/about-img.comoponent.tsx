import aboutImg from '../../../../assets/images/statics/about.png'
import { useAboutImgStyles } from './about-img.styles';
const AboutImgComoponent = () => {
    const classes=useAboutImgStyles()
    return (
        <div className={classes.container}>
            <div className={classes.imgDiv}>
                <img src={aboutImg} alt="" />
            </div>
        </div>
    );
}

export default AboutImgComoponent;
