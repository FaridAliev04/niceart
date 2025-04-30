import React from 'react';
import Home from '../../../../assets/images/icons/home';
import ChevronRight from '../../../../assets/images/icons/chevron-right';
import { useMainContactStyles } from './main-contact.styles';

const MainContactComponent = () => {
    const classes=useMainContactStyles()
    return (
        <div className={classes.container}> 
            <Home/>
            <ChevronRight/>
            <span className={classes.contact}>
                Contact 
            </span>
        </div>
    );
}

export default MainContactComponent;
