import React, { useCallback, useEffect, useState } from 'react';
import Logo from '../../../../../assets/images/icons/logo';
import { NavLink, useLocation  } from 'react-router-dom';
import { Routes } from '../../../../../router/routes';
import { useNavStyles } from './nav.style';
import Menu from '../../../../../assets/images/icons/menu';
import Instagram from '../../../../../assets/images/icons/instagram';
import YouTube from '../../../../../assets/images/icons/youTube';
import Twitter from '../../../../../assets/images/icons/twitter';
import classNames from 'classnames';
import Nav from '../../../../../assets/images/icons/nav';
import axios from 'axios';

const NavComponet = () => {
    const classes=useNavStyles()
    const [menu,setMenu]=useState(false)
    const location=useLocation()


    const menuFunc=useCallback(()=>{
        if(menu===false){
          setMenu(true)  
        }else{
            setMenu(false)
        }
        
    },[menu])

    const menuClass = classNames({
        [classes.mobileListDivNone]: menu === false,
        [classes.mobileListDiv]: menu !== false
    });

    useEffect(()=>{
        console.log(location.pathname)
        if(location.pathname){
            setMenu(false)
        }

        axios.get('https://api.jsonbin.io/v3/b/6818632a8960c979a593a1e3', {
            headers: {
              'X-Master-Key': '$2a$10$16UVMFx1T5AAoHL7XxpMYOnxKvrhzBoLpp.vBumZ2KlmPqU5aHI.2'
            }
          }).then(res => {
            console.log(res.data);
          }).catch(err => {
            console.error(err);
          });
    },[location])
    
    return (
        <div className={`centered-container container mx-auto ${classes.container}`}>
            <nav className={classes.nav}>
                <div>
                    <Logo/>
                </div>
                <div className={classes.navListDiv}>
                    <ul className={classes.ul}>
                        <li className={classes.list}>
                            {location.pathname===Routes.default?<Nav/>:""}
                            <NavLink  className={({isActive})=>isActive?classes.navList:classes.nullNavList}  to={Routes.default}>
                                 Home
                            </NavLink>
                           
                        </li>
                        <li className={classes.navList}>
                        {location.pathname===Routes.about?<Nav/>:""}
                            <NavLink className={({isActive})=>isActive?classes.navList:classes.nullNavList} to={Routes.about}>
                                Haqqımızda
                            </NavLink>
                        
                        </li>
                        <li className={classes.navList}>
                        {location.pathname===Routes.products?<Nav/>:""}
                            <NavLink  className={({isActive})=>isActive?classes.navList:classes.nullNavList} to={Routes.products}>
                                Məhsullar
                            </NavLink>
                        
                        </li>
                        <li className={classes.navList}>
                        {location.pathname===Routes.partners?<Nav/>:""}
                            <NavLink className={({isActive})=>isActive?classes.navList:classes.nullNavList} to={Routes.partners}>
                                Partnyorlar
                            </NavLink>          
                        </li>
                        <li className={classes.navList} >
                        {location.pathname===Routes.contact?<Nav/>:""}
                            <NavLink className={({isActive})=>isActive?classes.navList:classes.nullNavList} to={Routes.contact}>
                                Əlaqə
                            </NavLink>      
                        </li>

                    </ul>
                </div>
                <div className={classes.menuDiv}>
                    <div onClick={()=>menuFunc()} className={classes.menu}>
                        <Menu/>
                    </div>
                    <div className={menuClass}>
                        <div className={classes.closeDiv} onClick={()=>menuFunc()}>
                            <span className={classes.close}>
                                X
                            </span>
                        </div>
                    <ul className={classes.ulMobile}>
                    <li className={classes.list}>
                            {location.pathname===Routes.default?<Nav/>:""}
                            <NavLink  className={({isActive})=>isActive?classes.navList:classes.nullNavList}  to={Routes.default}>
                                 Home
                            </NavLink>
                           
                        </li>
                        <li className={classes.navList}>
                        {location.pathname===Routes.about?<Nav/>:""}
                            <NavLink className={({isActive})=>isActive?classes.navList:classes.nullNavList} to={Routes.about}>
                                Haqqımızda
                            </NavLink>
                        
                        </li>
                        <li className={classes.navList}>
                        {location.pathname===Routes.products?<Nav/>:""}
                            <NavLink  className={({isActive})=>isActive?classes.navList:classes.nullNavList} to={Routes.products}>
                                Məhsullar
                            </NavLink>
                        
                        </li>
                        <li className={classes.navList}>
                        {location.pathname===Routes.partners?<Nav/>:""}
                            <NavLink className={({isActive})=>isActive?classes.navList:classes.nullNavList} to={Routes.partners}>
                                Partnyorlar
                            </NavLink>          
                        </li>
                        <li className={classes.navList} >
                        {location.pathname===Routes.contact?<Nav/>:""}
                            <NavLink className={({isActive})=>isActive?classes.navList:classes.nullNavList} to={Routes.contact}>
                                Əlaqə
                            </NavLink>      
                        </li>

                    </ul>
                    <hr />
                    <div className={classes.sosialDiv}>
                        <Instagram/>
                        <YouTube/>
                        <Twitter/>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
        
    );
}

export default NavComponet;

