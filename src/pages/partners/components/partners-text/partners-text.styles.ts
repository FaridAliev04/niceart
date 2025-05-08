import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/function';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';



const styles = {
    partnersHeader:{
        color:colors.green,
        fontSize:sizes.extraLargeFontSize,
        width:"33.125rem",
        fontFamily:fonts.fontExtraBold,
        lineHeight:"4rem",
        alignItems: "anchor-center",
        [breakpoint(1260)] : {
            fontSize:sizes.middelSize,
            width:"fit-content",
            lineHeight:"3rem"
        },
        [breakpoint(576)] : {
          fontSize:sizes.middelSize,
          width:"fit-content"
      },
    },
    container:{
        display:"flex",
        justifyContent:"space-between",
        marginTop:"4rem",
        [breakpoint(1260)] : {
        //    padding:rem(sizes.base)
        },
        [breakpoint(768)]:{
            display:"flex",
            flexDirection:"column",
            // width:rem(sizes.largeMobileMainWidth),
            // margin:sizes.marginAuto,
            gap:"2rem",
            // padding:rem(sizes.base),
          },
          [breakpoint(576)] : {
            // width:sizes.smallMobileMainWidth,
            // margin:sizes.marginAuto,
            // padding:"1rem"
        },
        [breakpoint(440)] : {
        //    width:"19rem",
        //    margin:sizes.marginAuto,
        //    padding:"1rem",
           marginTop:"2rem"
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
            fontSize:sizes.middelSize,
        },
        [breakpoint(576)] : {
          fontSize:sizes.middelSize,
          width:"fit-content"
      },
    },
    texts:{
        color:colors.gray,
        lineHeight:"22px",
        width:"37.75rem",
        [breakpoint(1260)] : {
            width:"27rem"
        }, 
        [breakpoint(768)]:{
            width:"fit-content"
          },
    },
    textsDiv:{
        display:"flex",
        flexDirection:"column",
        gap:rem(sizes.base)
    },
    productBtn:{
        display: "flex",
        alignItems: "center",
        background:colors.green,
        width:"fit-content",
        color:colors.white,
        gap:"5px",
        border:"none",
        fontFamily:fonts.font,
        padding:"0.5rem 1rem",
        borderRadius:"8px"
    }


}

export const usePartnersTextStyles = createUseStyles(styles);