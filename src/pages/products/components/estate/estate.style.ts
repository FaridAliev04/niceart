import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';
import { rem } from '../../../../assets/styles/abstracts/function';
import sizes from '../../../../assets/styles/abstracts/sizes';



const styles = {
    estateBox:{
        background:colors.footerBg,
        display: "flex",
        justifyContent: "space-between",
        [breakpoint(576)] : {
            display:"flex",
            flexDirection:"column",
            position:"relative"
         },
    },
    container:{
        display:"flex",
        flexDirection:"column",
        gap:"3rem",
        marginTop:"5rem"
    },
    estateHeader:{
        fontSize:"24px",
        color:colors.green,
        fontFamily:fonts.fontExtraBold,
        width:"fit-content"
    },
    estateText:{
        color:colors.gray,
        width:"37.75rem",
        lineHeight:"22px",
        [breakpoint(1260)] : {
           width:"28rem"
         },
         [breakpoint(768)] : {
            width:"19rem"
          },
    },
    textDiv:{
        display:"flex",
        flexDirection:"column",
        gap:"1rem"
    },
    conditions:{
        display:"flex",
        gap:"2rem"
    },
    conditionsText:{
        color:colors.gray,
        [breakpoint(1260)]:{
            fontSize:"1rem"
         },
    },
    conditionsValue:{
        color:colors.gray,
        fontFamily:fonts.fontBlack,
        [breakpoint(1260)]:{
            fontSize:"0.6rem"
         },
    },
    conditionsBox:{
        display:"flex",
        flexDirection:"column",
        gap:"0.5rem"
    },
    btn:{
        background:colors.green,
        border:"none",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:colors.white,
        gap:"8px",
        borderRadius:"8px",
        padding:"0.5rem 1rem",
        width:" fit-content"
    },
    estateMainBox:{
        display:"flex",
        flexDirection:"column",
        gap:"3rem",
        padding:"3rem",
        [breakpoint(1260)] : {
            padding:"1.4rem"
         },
    },
    svgDiv:{
        display:"flex",
        alignItems: "end",
        [breakpoint(1260)]:{
            width:"fit-content",
         },
        [breakpoint(768)]:{
           "& img":{
                // width:"10rem"
        }
        },
        [breakpoint(576)] : {
            position:"absolute",
            right:"0",
            bottom:"0",
            width:"fit-content",
            "& img":{
                width:"6rem"
        }
         },
    }
}   

export const useEstateStyles = createUseStyles(styles);