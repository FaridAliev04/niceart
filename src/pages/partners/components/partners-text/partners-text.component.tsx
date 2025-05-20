import ArrowRight from '../../../../assets/images/icons/arrow-right';
import { usePartnersTextStyles } from './partners-text.styles';

const PartnersTextComponent = () => {
    const classes=usePartnersTextStyles()
    return (
        <div className={`container row ${classes.container}`}>
            <div className={`col-lg-6 ${classes.partnersHeaderDiv}`}>
                <h1 className={classes.partnersHeader}>
                Title for Products or Lorem Ipsum motto
                </h1>
            </div>
            <div className={`col-lg-6 ${classes.textsDiv}`}>
                <h1 className={classes.pulvinarHeader}>
                Lectus mauris pulvinar
                </h1>
                <p className={classes.texts}>
                Commodo interdum at lorem eget amet placerat nunc posuere. Viverra lacus, nisl cursus senectus malesuada leo donec pellentesque. Id faucibus nulla adipiscing pellentesque vulputate quis pulvinar. Sapien est vestibulum in porttitor volutpat.
                </p>
                <button className={classes.productBtn}>
                    Became a partner
                    <ArrowRight/>
                </button>
            </div>
        </div>
    );
}

export default PartnersTextComponent;
