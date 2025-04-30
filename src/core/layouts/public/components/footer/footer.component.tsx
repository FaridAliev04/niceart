import { useFooterStyles } from './footer.styles';
import Logo from '../../../../../assets/images/icons/logo';
import Facebook from '../../../../../assets/images/icons/facebook';
import Twitter from '../../../../../assets/images/icons/twitter';
import Instagram from '../../../../../assets/images/icons/instagram';
import LinkedIn from '../../../../../assets/images/icons/linkedIn';
import YouTube from '../../../../../assets/images/icons/youTube';
import Email from '../../../../../assets/images/icons/email';
import Phone from '../../../../../assets/images/icons/phone';
import Mark from '../../../../../assets/images/icons/mark';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../../../../router/routes';

const FooterComponent = () => {
    const classes=useFooterStyles()
    return (
        <div className={classes.mainDiv}>
            <footer className={classes.container}>
                <div className={classes.containerDiv}>
                <div className={classes.logoDiv}>
                    <Logo/>
                    <p className={classes.logoDivText}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                    </p>
                    <div className={classes.sosialDiv}>
                        <Facebook/>
                        <Twitter/>
                        <Instagram/>
                        <LinkedIn/>
                        <YouTube/>
                    </div>
                </div>

                <div className={classes.sectionDiv}>
                    <div className={classes.sectionMainDiv}>
                        <h1 className={classes.sectionHeader}>
                            Site
                        </h1>
                        <ul className={classes.ul}>
                            <li>
                                <NavLink className={classes.list} to={Routes.default}>
                                    Home Page
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={classes.list} to={Routes.default}>
                                About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={classes.list} to={Routes.default}>
                                Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={classes.list} to={Routes.default}>
                                Partners
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={classes.list} to={Routes.default}>
                                Contact Us
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className={classes.sectionMainDiv}>
                        <h1 className={classes.sectionHeader}>
                            Contacts us
                        </h1>
                        <div className={classes.contactBox}>
                            <Email/>
                            <span>contact@company.com</span>
                        </div>
                        <div className={classes.contactBox}>
                            <Phone/>
                            <span>(414) 687 - 5892</span>
                        </div>
                        <div className={classes.contactBox}>
                            <Mark/>
                            <span>Location of company</span>
                        </div>
                    </div>
                </div>

                </div>
                <div className={classes.copyrightDiv}>
                    <span className={classes.copyright}>
                    Copyright Ⓒ 2022 Javidan Nasib
                    </span>

                    <div className={classes.policy}>
                        <span className={classes.copyright}>
                        All Rights Reserved
                        </span>
                        <div className={classes.line}></div>
                        <a className={classes.link} href="">
                            Terms and Conditions
                        </a>
                        <div className={classes.line}></div>
                        <a className={classes.link} href="">
                        Privacy Policy
                        </a>
                    </div>
                </div>
            </footer>
            
        </div>
    );
}

export default FooterComponent;
