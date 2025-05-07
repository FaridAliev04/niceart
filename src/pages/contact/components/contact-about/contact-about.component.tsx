import { useContactAboutStyles } from './contact-about.styles';
import img1 from '../../../../assets/images/statics/1.png'
import img2 from '../../../../assets/images/statics/2.png'
import img3 from '../../../../assets/images/statics/3.png'
import img4 from '../../../../assets/images/statics/4.png'
import { useContact, useContactFile } from './action/contact.query';

const ContactAboutComponent = () => {
    const classes = useContactAboutStyles()
    const { data: contactData } = useContact();
    const { data: fileData } = useContactFile();
    console.log(fileData)

    return (
        <div className={classes.container}>
            <div className={classes.contactAbout}>
                <div className={classes.contactDiv}>
                    <h1 className={classes.header}>
                        DISCOVER US
                    </h1>
                    <p className={classes.headerText}>
                        Flick is here to help you;
                        <br />
                        Our experts are available to answer any questions you might have. We’ve got the answers.
                    </p>
                    <div className={classes.contactBoxs}>
                        <h1 className={classes.contactHeader}>
                            Visit Us
                        </h1>
                        <p className={classes.contact}>
                            {contactData?.location}
                        </p>
                    </div>

                    <span className={classes.contactSpan}>
                        Feel free to get in touch with us through our channels:
                    </span>

                    <div className={classes.contactBoxs}>
                        <h1 className={classes.contactHeader}>
                            Email US
                        </h1>
                        <p className={classes.contact}>
                            {contactData?.email}
                        </p>
                    </div>
                    <div className={classes.contactBoxs}>
                        <h1 className={classes.contactHeader}>
                            Call US
                        </h1>
                        <p className={classes.contact}>
                            {contactData?.phone}
                        </p>
                    </div>
                </div>

                {fileData && fileData.length >= 4 && (
                    <div className={classes.imgDiv}>
                        <div className={classes.imgBoxs}>
                            <div>
                                <img className={classes.img} src={fileData[0].url} alt="image-1" />
                            </div>
                            <div className={classes.secondImg}>
                                <img className={classes.img} src={fileData[1].url} alt="image-2" />
                            </div>
                        </div>

                        <div className={classes.imgBoxsRelative}>
                            <div>
                                <img className={classes.img} src={fileData[2].url} alt="image-3" />
                            </div>
                            <div className={classes.secondImg}>
                                <img className={classes.img} src={fileData[3].url} alt="image-4" />
                            </div>
                        </div>
                    </div>
                )}

                {/* <div className={classes.imgDiv}>        
                    <div className={classes.imgBoxs}>
                        <div>
                            <img className={classes.img} src={img2} alt="" />
                        </div>
                        <div className={classes.secondImg}>
                            <img className={classes.img} src={img1} alt="" />
                        </div>


                    </div>
                    <div className={classes.imgBoxsRelative}>
                        <div>
                            <img className={classes.img} src={img4} alt="" />
                        </div>
                        <div className={classes.secondImg}>
                            <img className={classes.img} src={img3} alt="" />
                        </div>


                    </div>
                </div> */}
            </div>

        </div>
    );
}

export default ContactAboutComponent;
