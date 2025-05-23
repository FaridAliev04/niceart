import Home from '../../../../assets/images/icons/home';
import ChevronRight from '../../../../assets/images/icons/chevron-right';
import { useMainContactStyles } from './main-contact.styles';

const MainContactComponent = () => {
    const classes=useMainContactStyles()
    return (
        <div className={`centered-container container mx-auto ${classes.container}`}> 
            <Home/>
            <ChevronRight/>
            <span className={classes.contact}>
                Contact 
            </span>
        </div>
    );
}

export default MainContactComponent;
