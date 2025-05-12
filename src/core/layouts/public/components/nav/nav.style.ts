import {createUseStyles} from 'react-jss';
import fonts from '../../../../../assets/styles/abstracts/fonts';
import colors from '../../../../../assets/styles/abstracts/color';
import sizes from '../../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../../assets/styles/abstracts/function';
import { breakpoint } from '../../../../../assets/styles/abstracts/mixins';


const styles = {
    container:{
        marginTop:rem(sizes.base),
        position:"relative",
        zIndex:"999",
        [breakpoint(1260)] : {
            marginTop:rem(sizes.base),
            padding:"0 1rem"
        },
        [breakpoint(768)] : {
            marginTop:rem(sizes.base),
            padding:"0 1rem"
        },
        
        [breakpoint(576)] : {
            marginTop:rem(sizes.base),
            padding:"0 1rem"
        },
        [breakpoint(440)] : {
            marginTop:rem(sizes.base),
            padding:"0 1rem"
         },
    },
    navList:{
        display:"flex",
        alignItems: "center",
        fontFamily:fonts.fontBold,
        color:colors.green,
        cursor: "pointer",
    },
    nullNavList:{
        fontFamily:fonts.fontBold,
        color:colors.gray,
        cursor: "pointer"
    },
    nav:{
        display:"flex",
        justifyContent:"space-between",
        
    },
    ul:{
        display:"flex",
         justifyContent:"space-between",
         gap:"2rem",
         marginTop:"1rem"
    },
    paramsNav:{
        background:colors.footerBg,
        width:sizes.mainWidth,
        margin:sizes.marginAuto,
        marginTop:rem(sizes.base)
    },

    menuDiv:{
        display:"none",
        [breakpoint(768)] : {
            display:"block"
        },
    },
    menu:{
        marginTop:"0.5rem"
    },
    navListDiv:{
        display:"block",
        [breakpoint(768)] : {
            display:"none"
        },
    },
    ulMobile:{
        display:"flex",
        flexDirection:"column",
        gap:"2rem",
        marginTop:"2rem"
       
    },
    mobileListDivNone:{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh",
        width: "250px",
        backgroundColor: "white",
        zIndex: 9999,
        padding: "2rem",
        transform: "translateX(100%)",
        transition: "transform 0.3s ease-in-out",
    },
    mobileListDiv:{
        display:"block",
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh",
        width: "250px",
        backgroundColor: "white",
        zIndex: 9999,
        padding: "2rem",
        transform: "translateX(0)",
        transition: "transform 0.3s ease-in-out",
    },
    sosialDiv:{
        display:"flex",
        gap:rem(sizes.base),
        marginTop:rem(sizes.base),
        alignItems: "center",
        height:"100%"
    },
    close:{
        color:colors.green,
        
    },
    closeDiv:{
        display:"flex",
        justifyContent:"end"
    },
    list:{
        display: "flex",
        alignItems: "center"
    }
}

export const useNavStyles = createUseStyles(styles);