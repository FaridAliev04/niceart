import Cola from '../../../../assets/images/icons/cola';
import Amazon from '../../../../assets/images/icons/amazon';
import Google from '../../../../assets/images/icons/google'
import { usePartnersDataStyles } from './partners-data.styles';
import { useCallback, useState } from 'react';

const PartnersDataComponent = ({id,setId}:any) => {
    const data =[
        {
            id:1,
            partners:"Coca-Cola LTD",
            span:"Ac, venenatis",
            text:"Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ",
            icon:<Cola/>
        },
        {
            id:2,
            partners:"Amazon",
            span:"Metus, vel",
            text:"Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ",
            icon:<Amazon/>
        },
        {
            id:3,
            partners:"Google",
            span:"Platea curabitur",
            text:"Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ",
            icon:<Google/>
        },
        {
            id:4,
            partners:"Google",
            span:"Platea curabitur",
            text:"Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ",
            icon:<Google/>
        },
        {
            id:5,
            partners:"Google",
            span:"Platea curabitur",
            text:"Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ",
            icon:<Google/>
        },
        {
            id:6,
            partners:"Amazon",
            span:"Metus, vel",
            text:"Vehicula elit est, neque non mattis pharetra, urna lectus magnis. Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna egestas est aliquet facilisis elit sit. Massa libero turpis facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo libero diam. ",
            icon:<Amazon/>
        },
    ]

    const classes=usePartnersDataStyles()

    const idFunction=useCallback((id:any)=>{
        setId(id)
    },[id])
    console.log(id)
    return (
        <div className={`row gx-4  ${classes.container}`}>
          {data.map((e,key) => (
            <div onClick={()=>idFunction(e.id)} key={key} className={`col-12 col-sm-6 col-md-4 col-lg-3 mb-20`}>
              <div className={classes.partnersBoxs}>
                <div className={classes.iconsDiv}>
                  {e.icon}
                  <p className={classes.span}>{e.span}</p>
                </div>
                <div className={classes.commerceDiv}>
                  <span className={classes.commerce}>E-commerce</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
      
}

export default PartnersDataComponent;
