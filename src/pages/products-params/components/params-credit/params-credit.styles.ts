import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';
import { rem } from '../../../../assets/styles/abstracts/function';




const styles = {
    container:{
        marginTop:"5rem",
    },
    box:{
       display:"flex",
       flexDirection:"column",
       gap:"1rem"
    },
    header:{
        color:colors.green,
        fontSize:sizes.smallFontSize,
        fontFamily:fonts.fontExtraBold,
        lineHeight:"100%",
        width:"17.563rem",
        [breakpoint(1260)] : {
            width:"fit-content",
            lineHeight:"1.7rem"
         },
    },
    span:{
        color:colors.gray,
    },
    line:{
        width:"100%"
    },
    svgDiv:{
        width:"5rem",
        height:"5rem",
        borderRadius:"100%",
        background:colors.footerBg,
        display:"flex",
        alignItems: "center",
        justifyContent: "center",

    }

}

export const useParamsCreditStyles = createUseStyles(styles);