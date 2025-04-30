import React from 'react';
import { useContactAboutStyles } from './contact-about.styles';
import img1 from '../../../../assets/images/statics/1.png'
import img2 from '../../../../assets/images/statics/2.png'
import img3 from '../../../../assets/images/statics/3.png'
import img4 from '../../../../assets/images/statics/4.png'

const ContactAboutComponent = () => {
    const classes=useContactAboutStyles()
    return (
        <div className={classes.container}>
            <div className={classes.contactAbout}>
            <div className={classes.contactDiv}>
                <h1 className={classes.header}>
                    DISCOVER US
                </h1>
                <p className={classes.headerText}>
                Flick is here to help you;
                <br/>
                Our experts are available to answer any questions you might have. We’ve got the answers.
                </p>
                <div className={classes.contactBoxs}>
                    <h1 className={classes.contactHeader}>
                    Visit Us
                    </h1>
                    <p className={classes.contact}>
                    Office no. G-02. Building 1, Ground Floor. Dubai Media City – Dubai
                    </p>
                </div>

                <span className={classes.contactSpan}>
                Feel free to get in touch with us through our channels: 
                </span>

                <div  className={classes.contactBoxs}>
                    <h1 className={classes.contactHeader}>
                    Email US
                    </h1>
                    <p className={classes.contact}>
                    javidan.nasib@gmai.com
                    </p>
                </div>
                <div  className={classes.contactBoxs}>
                    <h1 className={classes.contactHeader}>
                    Call US
                    </h1>
                    <p className={classes.contact}>
                    +994 51 535 11 35
                    </p>
                </div>
            </div>

            <div className={classes.imgDiv}>
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
            </div>
        </div>

        </div>
    );
}

export default ContactAboutComponent;
