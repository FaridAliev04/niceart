import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';
import { rem } from '../../../../assets/styles/abstracts/function';



const styles = {
    container:{
        // width:sizes.mainWidth,
        // margin:sizes.marginAuto,
        display:"flex",
        justifyContent:"space-between",
        marginTop:"5rem",
        [breakpoint(1260)] : {
            // width:rem(sizes.tabletMainWidth),
            // margin:sizes.marginAuto,
            marginTop:"5rem",
            padding:"0 1rem",
            gap:rem(sizes.base)
        },
        [breakpoint(768)] : {
            // width:rem(sizes.largeMobileMainWidth),
            // margin:sizes.marginAuto,
            marginTop:"5rem",
            padding:"0 1rem",
            display:"flex",
            flexDirection:"column",
            gap:"1rem"
        },
        [breakpoint(576)] : {
            // width:sizes.smallMobileMainWidth,
            // margin:sizes.marginAuto,
            marginTop:"5rem",
            padding:"0 1rem",
        },
        [breakpoint(440)] : {
            // width:rem(sizes.miniMobileMainWidth),
            // margin:sizes.marginAuto,
            marginTop:"5rem",
            padding:"0 1rem",
        },
    },
    productBtn:{
        display: "flex",
        alignItems: "center",
        background:colors.green,
        color:colors.white,
        gap:"5px",
        border:"none",
        fontFamily:fonts.font,
        padding:"0.5rem 1rem",
        borderRadius:"8px",
        [breakpoint(576)] : {
            padding:"0.5rem"
        },
    },
    aboutBtn:{
        display: "flex",
        alignItems: "center",
        background:colors.white,
        color:colors.green,
        gap:"5px",
        border:`1px solid ${colors.green}`,
        fontFamily:fonts.font,
        padding:"0.5rem 1rem",
        borderRadius:"8px",
        [breakpoint(576)] : {
            padding:"0.3rem"
        },
    },
    btnDiv:{
        display:"flex",
        gap:"2rem"
    },
    header:{
        fontFamily:fonts.fontExtraBold,
        color:colors.green,
        fontSize:"72px",
        [breakpoint(1260)] : {
            fontSize:sizes.tabletExtraLargeFontSize
        },
        [breakpoint(768)] : {
           fontSize:"32px",
           width:"fit-content"
        },
    },
    text:{
        color:colors.gray,
        width:"530px",
        lineHeight:"22px",
        [breakpoint(1260)] : {
            width:"35rem"
        },

        [breakpoint(576)] : {
            width:"fit-content"
        },
    },
    textDiv:{
        display:"flex",
        flexDirection: "column",
        gap:"1.5rem"
    }
}

export const useHelpYouStyles = createUseStyles(styles);