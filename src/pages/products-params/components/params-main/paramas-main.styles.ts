import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';
import { rem } from '../../../../assets/styles/abstracts/function';




const styles = {
    container:{
        position:"absolute",
        top:0,
        background:colors.footerBg,
        width:"100%",
        paddingTop:"6rem",
        
    },
    box:{
        width:sizes.mainWidth,
        margin:sizes.marginAuto,
        [breakpoint(1260)] : {
            width:rem(sizes.tabletMainWidth),
            margin:sizes.marginAuto,
            padding:"1rem"
         },
         [breakpoint(768)]:{
             width:rem(sizes.largeMobileMainWidth),
             margin:sizes.marginAuto,
             padding:"1rem"
         },
         [breakpoint(576)] : {
            width:sizes.smallMobileMainWidth,
            margin:sizes.marginAuto,
            padding:"1rem"
        },
        [breakpoint(440)] : {
           width:rem(sizes.miniMobileMainWidth),
           margin:sizes.marginAuto,
           padding:"1rem"
       },
    },
    about:{
        color:colors.green
    },
    mainContainer:{
        display:"flex",
        alignItems: "center"
    },
    paramsHeader:{
        fontSize:sizes.extraLargeFontSize,
        color:colors.green,
        fontFamily:fonts.fontExtraBold,
        width:"33.125rem",
        lineHeight:"4.625rem",
        [breakpoint(1260)] : {
            fontSize:sizes.middelSize,
            width:"fit-content",
            lineHeight:"2.625rem",
         },
         [breakpoint(768)]:{
            fontSize:sizes.middelSize,
            width:"fit-content",
            lineHeight:"2rem",
         },
         [breakpoint(576)] : {
             width:"fit-content",
             fontSize:"1.5rem"
         },
    },
    mainDiv:{
        display:"flex",
        justifyContent:"space-between",
        alignItems: "center",
        marginTop:"3rem",
        
        [breakpoint(1260)] : {
            gap:"3rem"
         },
         [breakpoint(768)]:{
             width:rem(sizes.largeMobileMainWidth),
             margin:sizes.marginAuto,
             flexDirection:"column",
            marginTop:"2rem"
         },
         [breakpoint(576)] : {
            width:sizes.smallMobileMainWidth,
            margin:sizes.marginAuto,
            marginTop:"2rem"
        },
        [breakpoint(440)] : {
           width:"18rem",
           margin:sizes.marginAuto,
       },
    },
    paramsImg:{
        [breakpoint(768)]:{
            display:"flex",
            width:"fit-content"
        },
        [breakpoint(576)] : {
            display:"flex",
           width:"15rem"
        },
    }


}

export const useMainParamsStyles = createUseStyles(styles);