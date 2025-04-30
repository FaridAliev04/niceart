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
        marginTop:"20rem",
        [breakpoint(1260)] : {
            width:rem(sizes.tabletMainWidth),
            margin:sizes.marginAuto,
            marginTop:"10rem",
            padding:"0 1rem"
        },
        [breakpoint(768)]:{
            width:rem(sizes.largeMobileMainWidth),
            margin:sizes.marginAuto,
            marginTop:"5rem",
            padding:"0 1rem"
        },
        [breakpoint(576)] : {
            width:rem(sizes.miniMobileMainWidth),
            margin:sizes.marginAuto,
            marginTop:"5rem",
        },
    },
    header:{
        color:colors.green,
        fontFamily:fonts.fontExtraBold,
        
    },
    credit:{
        fontSize:sizes.largeFontSize,
        fontFamily:fonts.fontExtraBold,
        width:"400px",
        color:colors.gray,
        lineHeight:"47px",
        [breakpoint(1260)] : {
            fontSize:"1.75rem"
        },
        [breakpoint(576)]:{
            width:"fit-content"
         }
    },
    creditText:{
        lineHeight:"1.5rem",
        color:colors.gray,
        width:"700px",
        [breakpoint(768)]:{
            width:"fit-content"
         }
    },
    textDiv:{
        display:"flex",
        justifyContent:"space-between",
        marginTop:'2rem',
        [breakpoint(768)]:{
           display:"flex",
           flexDirection:"column",
           gap:rem(sizes.base),
        }
    }
}

export const useProductStyles = createUseStyles(styles);