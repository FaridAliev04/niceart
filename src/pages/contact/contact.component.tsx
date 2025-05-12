
import ContactAboutComponent from './components/contact-about/contact-about.component';
import ContactFormsComponent from './components/contact-forms/contact-forms.component';
import MapComponent from './components/map/map.component';
import BreadcrumbComponent from '../../core/shared/breadcrumb/breadcrumb.component';

const ContactComponent = () => {
    return (
        <div >
            <BreadcrumbComponent/>
            <ContactAboutComponent/>
            <ContactFormsComponent/>
            <MapComponent/>
        </div>
    );
}

export default ContactComponent;
