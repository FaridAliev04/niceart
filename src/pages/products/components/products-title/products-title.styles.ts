import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/function';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';



const styles = {
    productHeader:{
        color:colors.green,
        fontSize:sizes.extraLargeFontSize,
        width:"33.125rem",
        fontFamily:fonts.fontExtraBold,
        lineHeight:"4rem",
        alignItems: "anchor-center",
        [breakpoint(1260)] : {
            fontSize:sizes.largeMobileLargeFontSize,
            width:"fit-content",
            lineHeight:"3rem",
         },
    },
    container:{
        marginTop:"4rem",
         padding:"0rem",
        [breakpoint(768)] : {
            padding:"0rem",
            marginTop:"2rem"
         },
        [breakpoint(576)] : {
            marginTop:'2rem',
         },
         
    },
    textHeader:{
        color:colors.gray,
        fontFamily:fonts.fontExtraBold,
        width:"28.125rem",
    },
    pulvinarHeader:{
        fontSize:sizes.largeFontSize,
        color:colors.gray,
        width:"28.125rem",
        fontFamily:fonts.fontExtraBold,
        lineHeight:"3rem",
        [breakpoint(1260)] : {
            fontSize:sizes.largeMobileLargeFontSize,
            width:"fit-content",
         },
    },
    texts:{
        color:colors.gray,
        lineHeight:"22px",
       width:"fit-content",
    },
    textsDiv:{
        display:"flex",
        flexDirection:"column",
        gap:rem(sizes.base)
    }


}

export const useProductsTitleStyles = createUseStyles(styles);