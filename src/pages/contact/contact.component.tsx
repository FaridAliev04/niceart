import React from 'react';
import MainContactComponent from './components/main-contact/main-contact.component';
import { useContactStyles } from './contact.styles';
import ContactAboutComponent from './components/contact-about/contact-about.component';
import ContactFormsComponent from './components/contact-forms/contact-forms.component';
import MapComponent from './components/map/map.component';

const ContactComponent = () => {
    const classes=useContactStyles()
    return (
        <div className=''>
            <MainContactComponent/>
            <ContactAboutComponent/>
            <ContactFormsComponent/>
            <MapComponent/>
        </div>
    );
}

export default ContactComponent;
