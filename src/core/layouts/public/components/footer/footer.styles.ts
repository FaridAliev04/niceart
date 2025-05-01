import {createUseStyles} from 'react-jss';
import sizes from '../../../../../assets/styles/abstracts/sizes';
import colors from '../../../../../assets/styles/abstracts/color';
import { rem } from '../../../../../assets/styles/abstracts/function';
import fonts from '../../../../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../../../../assets/styles/abstracts/mixins';




const styles = {
    container:{
        width:sizes.mainWidth,
        margin:sizes.marginAuto,
        [breakpoint(1260)] : {
            width:rem(sizes.tabletMainWidth),
            margin:sizes.marginAuto,
            padding:"0 1rem"
        },
        [breakpoint(768)]:{
            width:rem(sizes.largeMobileMainWidth),
            margin:sizes.marginAuto,
            marginTop:"5rem",
            // padding:"2rem",
        },
        [breakpoint(576)] : {
            width:sizes.smallMobileMainWidth,
            margin:sizes.marginAuto,    
         },
        [breakpoint(416)] : {
            width:rem(sizes.miniMobileMainWidth),
            margin:sizes.marginAuto
         },
    },
    containerDiv:{
        display:"flex",
        justifyContent:"space-between",
        [breakpoint(768)]:{
            display:"flex",
            flexDirection:"column",
            gap:rem(sizes.base)
        }

    },
    mainDiv:{
        background:colors.footerBg,
        padding:"6rem 0",
        marginTop:"8rem"
    },
    logoDiv:{
        display:"flex",
        flexDirection:"column",
        gap:"2rem"
    },
    sosialDiv:{
        display:"flex",
        gap:rem(sizes.base),
        alignItems: "baseline"
    },
    sectionDiv:{
        display:"flex",
        justifyContent:"space-between",
        gap:"7rem",
        [breakpoint(576)] : {
            display:"flex",
            marginTop:rem(sizes.base)
         },
         [breakpoint(416)] : {
            flexDirection:"column"   
         },
         
    },
    sectionMainDiv:{
        display:"flex",
        flexDirection:"column",
        gap:"1rem"
    },
    ul:{
        display:"flex",
        flexDirection:"column",
        gap:"1rem"
    },
    logoDivText:{
        color:colors.gray,
        width:"fit-content"
    },
    list:{
        color:colors.gray
    },
    sectionHeader:{
        color:colors.gray,
        fontFamily:fonts.fontBold
    },
    contactBox:{
        display:"flex",
        gap:rem(sizes.base)
    },
    copyrightDiv:{
        display:"flex",
        justifyContent:"space-between",
        marginTop:"4rem"
    },
    copyright:{
        color:"#6F6C90",
        [breakpoint(768)]:{
            width:"13rem"
        },
        [breakpoint(576)] : {
            width:"fit-content"
         },
    },
    policy:{
        display:"flex",
        justifyContent:"space-between",
        gap:"0.5rem",
        [breakpoint(576)] : {
            display:"none"
         },
    },
    line:{
        width:"2px",
        background:colors.green
    },
    link:{
        textDecoration: "underline",
        color:colors.green
    }
}

export const useFooterStyles = createUseStyles(styles);