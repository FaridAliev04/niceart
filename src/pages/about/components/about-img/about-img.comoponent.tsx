import aboutImg from '../../../../assets/images/statics/about.png'
import { useAboutImgStyles } from './about-img.styles';
import { useAboutImg } from './action/about-img.query';
const AboutImgComoponent = () => {
    const classes = useAboutImgStyles()
    const { data } = useAboutImg()
    return (
        <div className={classes.container}>
            <div className={classes.imgDiv}>
                <video
                    src={data?.record.file.url}
                    autoPlay
                    muted
                    loop
                />           
             </div>
        </div>
    );
}

export default AboutImgComoponent;
