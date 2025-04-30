import { useAboutUsStyles } from "./about-us.styles";

const AboutUsComponent = () => {
    const classes=useAboutUsStyles()
    return (
        <div className={classes.container}>
            <div>
                <h1 className={classes.mainHeader}>
                Title for about us or Lorem Ipsum motto
                </h1>
            </div>
            <div className={classes.texts}>
                <p className={classes.aboutUs}>
                Biz kimik?
                </p>
                <h1 className={classes.textsHeader}>
                Lectus mauris pulvinar
                sit?
                </h1>
                <p className={classes.text}>
                Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. 
                </p>
            </div>
        </div>
    );
}

export default AboutUsComponent;
