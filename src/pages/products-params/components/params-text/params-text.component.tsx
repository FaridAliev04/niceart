import React from 'react';
import { useParamsTextStyles } from './params-text.styles';

const ParamsTextComponent = () => {
    const classes=useParamsTextStyles()
    return (
        <div className={classes.container}>
            <div className={classes.paramsTexts}>
                <p className={classes.paramsCredit}>
                Kredit Haqqında
                </p>
                <h1 className={classes.paramsHeader}>
                Id duis id turpis mi 
                quisque. Nulla.
                </h1>
            </div>
            <div className={classes.textsDiv}>
                <p className={classes.text}>
                Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. 
                </p>
            </div>
        </div>
    );
}

export default ParamsTextComponent;
