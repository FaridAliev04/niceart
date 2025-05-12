import React, { useEffect } from 'react';
import Home from '../../../assets/images/icons/home';
import ChevronRight from '../../../assets/images/icons/chevron-right';
import { usebreadCrumb } from './breadcrumb.styles';
import { useLocation } from 'react-router-dom';

const BreadcrumbComponent = () => {
    const classes=usebreadCrumb()
    const location =useLocation()
    const locationPath=location.pathname

    const link=[
        {
            id:1,
            path:"/about",
            title:"About us"
        },
        {
            id:2,
            path:"/products",
            title:"Products"
        },
        {
            id:3,
            path:"/contact",
            title:"Contact"
        },
        {
            id:4,
            path:"/partners",
            title:"Partners",
        },
        {
            id:5,
            path:"/products",
            title:"",
        },

        
        
    ]
    const data=link.filter((e)=>e.path==locationPath)

    return (
        <div className={` centered-container container  mx-auto   ${classes.container}`}> 
            <Home/>
            <ChevronRight/>
            <span className={classes.about}>
            {data.map((e)=>{
                return e.title
            })}
            </span>
        </div>
    );
}

export default BreadcrumbComponent;
