import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/function';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';



const styles = {
    container:{
        // width:sizes.mainWidth,
        // margin:sizes.marginAuto,
        [breakpoint(1260)] : {
            // width:rem(sizes.tabletMainWidth),
            // margin:sizes.marginAuto,
            // padding:"1rem"
         },
         [breakpoint(768)]:{
            //  width:rem(sizes.largeMobileMainWidth),
            //  margin:sizes.marginAuto,
            //  padding:"1rem",
             paddingBottom:"30rem"
         },

         [breakpoint(576)] : {
        //     width:sizes.smallMobileMainWidth,
        //     margin:sizes.marginAuto,
        //    padding:"2rem",
            paddingBottom:"30rem"
        },
        [breakpoint(440)] : {
        //    width:rem(sizes.miniMobileMainWidth),
        //    margin:sizes.marginAuto,
           paddingBottom:"30rem"
       },
    },
    contactAbout:{
        display:"flex",
        justifyContent:"space-between",
        width:"58%",
        alignItems: "baseline",
        marginTop:sizes.componentTop,
        [breakpoint(768)]:{
            display:"flex",
            flexDirection:"column",
            width:"100%",
            marginTop:"4rem"
        },

        
    },
    header:{
        fontSize:sizes.largeFontSize,
        color:colors.gray,
        fontFamily:fonts.fontExtraBold,
        [breakpoint(1260)] : {
            fontSize:sizes.tabletExtraLargeFontSize,
            width:"fit-content"
         },
         [breakpoint(768)]:{

         },
         [breakpoint(576)] : {

         },
    },
    headerText:{
        fontSize:"1.375rem",
        lineHeight:"2.188rem",
        width:"33.125rem",
        [breakpoint(1260)] : {
            fontSize:rem(sizes.base),
            width:"15rem"
         },
         [breakpoint(768)]:{
            width:"fit-content"

         },
         [breakpoint(576)] : {

         },
    },
    contactHeader:{
        fontSize:sizes.middelSize,
        color:colors.gray,
        fontFamily:fonts.fontExtraBold
    },
    contact:{
        fontSize:sizes.smallFontSize,
        color:colors.gray,
        textDecoration: "underline",
        width:"25rem",
        lineHeight:"2.188rem",
        [breakpoint(1260)] : {
            fontSize:rem(sizes.base),
            width:"16rem"
         },
         [breakpoint(768)]:{
            width:"fit-content"
         },
         [breakpoint(576)] : {

         },
    },
    contactSpan:{
        color:colors.gray,
        fontSize:sizes.smallFontSize,
        [breakpoint(1260)] : {
            fontSize:rem(sizes.base),
            width:"15rem"
         },
         [breakpoint(768)]:{
            width:"fit-contact"
         },
         [breakpoint(576)] : {

         },
    },
    contactDiv:{
        display:"flex",
        flexDirection:"column",
        gap:sizes.middelSize
    },
    contactBoxs:{
        display:"flex",
        flexDirection:"column",
        gap:rem(sizes.base)
    },
    imgBoxs:{
        display:"flex",
        gap:"4rem",
        position:"absolute",
        [breakpoint(576)] : {
            gap:rem(sizes.base)
        },
    },
    imgBoxsRelative:{
        display:"flex",
        gap:"4rem",
        position:"absolute",
        top:"12rem",
        left:"-7rem",
        [breakpoint(1260)] : {
            top:"7rem",
            left:"-4rem",
         },
         [breakpoint(768)]:{
             maxWidth:"10rem"
         },
         [breakpoint(576)] : {
            //  maxWidth:"fit-content",
             gap:rem(sizes.base)
         },
    },
    secondImg:{
        marginTop:"2rem"
    },
    imgDiv:{
        position:"relative",
        [breakpoint(1260)] : {
            top:"4rem",
            right: "4rem"
         },
         [breakpoint(768)]:{
            top:"4rem",
            left: "5rem"
         },
         [breakpoint(576)] : {
            left:"10rem"
        },
        [breakpoint(440)] : {
          left: "6rem"
       },

    },
    img:{
        maxWidth:"14.313rem",
        height:"19.313rem",
        [breakpoint(1260)] : {
            maxWidth:"10rem",
            height:"15rem",
         },
         [breakpoint(768)]:{
            //  maxWidth:"9rem"
         },
         [breakpoint(576)] : {
             maxWidth:"90.73px",
             height:"150.15px",
         },
    }
}

export const useContactAboutStyles = createUseStyles(styles);