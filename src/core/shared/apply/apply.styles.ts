import {createUseStyles} from 'react-jss';
import sizes from '../../../assets/styles/abstracts/sizes';
import colors from '../../../assets/styles/abstracts/color';
import fonts from '../../../assets/styles/abstracts/fonts';
import { rem } from '../../../assets/styles/abstracts/function';
import { breakpoint } from '../../../assets/styles/abstracts/mixins';





const styles = {
    container:{
        display:"flex",
        justifyContent:"space-between",
        marginTop:"10rem",
        position:"relative",
        [breakpoint(1260)] : {
           marginTop:"10rem",
           display:"flex",
           flexDirection:"column",
           gap:rem(sizes.base +1),
           background:colors.footerBg,
           padding:"2.5rem"
        },
        [breakpoint(768)]:{
            marginTop:"5rem",
            padding:"2rem",
        },
        [breakpoint(576)] : {
            marginTop:"5rem",
        },
        [breakpoint(440)] : {
            marginTop:"5rem",
        },
    },
    inpDiv:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #d9d9d9',
        borderRadius: 8,
        padding: '4px 12px',
        marginBottom: 8,
    },
    header:{
        color:colors.green,
        fontFamily:fonts.fontExtraBold,
        lineHeight:"100%",
        
    },
    textHeader:{
        color:colors.gray,
        fontSize:sizes.largeFontSize,
        width:"23.75rem",
        fontFamily:fonts.fontExtraBold,
        [breakpoint(576)] : {
           fontSize:sizes.largeMobileLargeFontSize,
           width:"fit-content"
        },
    },
    text:{
        color:colors.gray,
        width:"19.25rem",
        [breakpoint(1200)] : {
            width:"fit-content"
         },
        [breakpoint(576)] : {
            width:"fit-content"
         },
    },
    texts:{
        display:"flex",
        flexDirection:"column",
        gap:"2rem",
        position:"absolute",
        top:"6rem",
        [breakpoint(1260)] : {
            position:"static"
         },
         
        
    },
    applyDiv:{
        display:"flex",
        gap:"0.5rem",
        [breakpoint(768)]:{
            flexDirection:"column"
        }
    },
    personDiv:{
        display:"grid",
        marginTop:"1rem",
        gridTemplateColumns:"auto auto",
        gap:"1rem",
        [breakpoint(768)]:{
            display:"flex",
            flexDirection:"column"
        }
    },
    applyBtn:{
        display: "flex",
        alignItems: "center",
        background:colors.green,
        color:colors.white,
        gap:"5px",
        border:"none",
        fontFamily:fonts.font,
        padding:"0.7rem 4rem",
        borderRadius:"8px"
    },
    inputsDiv:{
        display:"flex",
        flexDirection:"column",
        gap:"0.5rem",

        [breakpoint(768)]:{
            maxWidth:"100% !important"
        }

    },
    span:{
        fontFamily:fonts.fontBold,
        color:colors.green,
    },
    personMainDiv:{
        display:"flex",
        flexDirection:"column",
        gap:"0.5rem"
    },
    btnDiv:{
        display:"flex",
        justifyContent:"space-between",
        marginTop:"1.2rem",
        alignItems: "baseline",
        [breakpoint(576)] : {
            display:"flex",
            flexDirection:"column",
            gap:rem(sizes.base)
         },
    },
    label:{
        fontFamily:fonts.fontBold,
        color:colors.gray
    },
    check:{
        fontFamily:fonts.fontBlack,
        width:"180px",
        display:"flex"
    },
    applyMainDiv:{
        padding: "5rem 2rem",
        [breakpoint(1260)] : {
            padding:"0",
            background:"none"
         },
    },
    monthly:{
        color:colors.gray,
        fontSize:"0.75rem",
        lineHeight:"100%"
    },
    monthlyDiv:{
        display:"flex",
        flexDirection:"column",
        gap:"0.5rem"
    },
    backgroundDiv:{
        position:"absolute",
        right:"0",
        background:colors.footerBg,
        marginLeft:"17rem",
        width: "85%",
        height: "100%",
        zIndex:"-1",
        [breakpoint(1260)] : {
            display:"none" 
         },
    }
}

export const useApplyStyles = createUseStyles(styles);