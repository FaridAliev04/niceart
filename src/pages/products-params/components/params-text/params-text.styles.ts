import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';
import { rem } from '../../../../assets/styles/abstracts/function';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';



const styles = {
    container:{
        width:sizes.mainWidth,
        margin:sizes.marginAuto,
        marginTop:"35rem",
        display:"flex",
        justifyContent:"space-between",
        [breakpoint(1260)] : {
            width:rem(sizes.tabletMainWidth),
            margin:sizes.marginAuto,
            padding:"1rem",
            marginTop:"32rem",
            flexDirection:"column",
            gap:rem(sizes.base)
         },
         [breakpoint(768)]:{
             width:rem(sizes.largeMobileMainWidth),
             margin:sizes.marginAuto,
             padding:"1rem",
             marginTop:"37rem",
             flexDirection:"column",
             gap:rem(sizes.base)
         },
         [breakpoint(576)] : {
             width:rem(sizes.miniMobileMainWidth),
             margin:sizes.marginAuto,
             padding:"1rem",
             marginTop:"43rem",
         },
    },
    paramsCredit:{
        color:colors.green,
        fontFamily:fonts.fontExtraBold,
    },
    paramsHeader:{
        fontSize:sizes.largeFontSize,
        color:colors.gray,
        width:"23.375rem",
        fontFamily:fonts.fontExtraBold,
        lineHeight:"3rem",
        [breakpoint(1260)] : {
            fontSize:sizes.middelSize,
            width:"fit-content"
         },
         [breakpoint(768)]:{
             
         },
         [breakpoint(576)] : {

         },
    },
    paramsTexts:{
        display:"flex",
        flexDirection:"column",
        gap:rem(sizes.base),
    },
    text:{
        color:colors.gray,
        width:"38.125rem",
        lineHeight:"1.688rem",
        [breakpoint(1260)] : {
            width:"fit-content"
         },
         [breakpoint(768)]:{

         },
         [breakpoint(576)] : {

         },
    },
    textsDiv:{
        display:"flex",
        alignItems: "center"
    }

}

export const useParamsTextStyles = createUseStyles(styles);