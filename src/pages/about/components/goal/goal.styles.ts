import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';
import { rem } from '../../../../assets/styles/abstracts/function';




const styles = {
    container:{
        display:"flex",
        justifyContent:"space-between",
        position:"relative",
        marginTop:"7rem",
        [breakpoint(1260)] : {
            // width:"46rem",
            position:"static",
            display:"flex",
            flexDirection:"column",
            gap:"3rem",
            background:colors.footerBg,
            padding:"2rem",
            "& img":{
                width: "5rem",
                height: "5rem"
            },
         },
         [breakpoint(768)]:{
            // width:"34rem",
            // margin:sizes.marginAuto,
            marginTop:"5rem"
          },
          [breakpoint(576)] : {
            // width:"27rem",
            // margin:sizes.marginAuto,
            marginTop:"2rem",
            padding:"2rem 1rem",
            "& h1":{
                fontSize:"1.5rem",
                 width:"fit-content"
            },
            "& p":{
                width:"fit-content"
            },
            "& img":{
                width: "5rem",
                height: "5rem"
            }
        },
        [breakpoint(440)] : {
            // width:"18rem",
            // margin:sizes.marginAuto,
            marginTop:"2rem",
            padding:"2rem 1rem",
            "& h1":{
                fontSize:"1.5rem",
                 width:"fit-content"
            },
            "& p":{
                width:"fit-content"
            },
            "& img":{
                width: "5rem",
                height: "5rem"
            }
        },
        },
    goalDiv:{
        // position:"absolute",
        display:"flex",
        flexDirection:"column",
        gap:"1.5rem",
        top:"13rem",
        justifyContent:"center",
        [breakpoint(1260)] : {
            position:"static", 
         },
         
    },
    goal:{
        color:colors.green,
        fontFamily:fonts.fontExtraBold
    },
    goalHeader:{
        fontSize:sizes.largeFontSize,
        color:colors.gray,
        fontFamily:fonts.fontExtraBold,
        width:"23.75rem"
    },
    goalText:{
        color:colors.gray,
        lineHeight:"22px",
        width:"27.25rem",
        [breakpoint(768)] : {
            width:"fit-content"
        },
    },
    goalData:{
        display:"flex",
        flexDirection:"column",
        gap:"2rem",
        padding:"1rem",
        [breakpoint(1260)] : {
            padding:"0",
            marginLeft:"0",
            background:"none",
            display: "flex",
            alignItems: "center"
         },
    },
    goalDataBox:{
        display:"flex",
        gap:"1rem",
        [breakpoint(576)] : {
            display:"flex",
            gap:rem(sizes.base)
        },
    },
    goalDataBoxPair:{
        display:"flex",
        gap:"1rem",
        marginLeft:"5rem",
        [breakpoint(768)]:{
            marginLeft:"0"
          },
          [breakpoint(576)] : {
            display:"flex",
            gap:rem(sizes.base)
        },
    },
    goalDataHeader:{
        color:colors.gray,
        fontFamily:fonts.fontBlack,
        fontSize:"20px",
        width:"25rem",
        lineHeight: "22px",
        [breakpoint(576)] : {
            fontSize:"1rem !important",
            fontFamily:fonts.font,

        },
    },
    goalDataText:{
        color:colors.gray,
        width:"25rem",
        lineHeight: "22px",
        [breakpoint(576)] : {
            fontSize:"14px !important",
            fontFamily:fonts.font,

        },
    },
    goalDataTextDiv:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        [breakpoint(576)] : {
            gap:rem(sizes.base)
        },
    },
    goalImgDiv:{
        [breakpoint(576)] : {
            display:"flex",
            justifyContent:"center",
            width:"100%"
        },
    },
    img:{
        width:"10rem"
    },
    backgroundDiv:{
        position:"absolute",
        right:"0",
        background:colors.footerBg,
        marginLeft:"17rem",
        width: "75%",
        height: "100%",
        // zIndex:"-1",
        [breakpoint(1260)] : {
            display:"none" 
         },
    }
}

export const useGoalStyles = createUseStyles(styles as any);