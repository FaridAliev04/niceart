import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';
import { rem } from '../../../../assets/styles/abstracts/function';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';



const styles = {
    container:{
        marginTop:"35rem",
        display:"flex",
        justifyContent:"space-between",
        [breakpoint(1249)] : {
            marginTop:"27rem",
            flexDirection:"column",
            gap:rem(sizes.base)
         },
         [breakpoint(768)]:{
             marginTop:"37rem",
             flexDirection:"column",
             gap:rem(sizes.base)
         },
         [breakpoint(576)] : {
             marginTop:"27rem",
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
    },
    textsDiv:{
        display:"flex",
        alignItems: "center"
    }

}

export const useParamsTextStyles = createUseStyles(styles);