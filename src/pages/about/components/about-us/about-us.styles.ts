import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/function';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';



const styles = {
  mainHeader:{
    fontSize:sizes.extraLargeFontSize,
    color:colors.green,
    width:"33.125rem",
    fontFamily:fonts.fontExtraBold,
    lineHeight: "4rem",
    [breakpoint(1260)] : {
      fontSize:sizes.middelSize,
      width:"18rem",
  },
  [breakpoint(768)]:{
      fontSize:sizes.middelSize,
      width:"fit-content",
      lineHeight: "3rem",

  },
  [breakpoint(576)] : {
    fontSize:sizes.middelSize,
    width:"fit-content",
    lineHeight: "3rem",
  },
    
  },
  container:{
    display:"flex",
    justifyContent:"space-between",
    alignItems: "center",
    marginTop:"4rem",
    [breakpoint(768)]:{
      display:"flex",
      flexDirection:"column",
      width:rem(sizes.largeMobileMainWidth),
      margin:sizes.marginAuto,
      gap:"2rem",
      padding:rem(sizes.base),
      alignItems:"baseline"
    },
    [breakpoint(576)] : {
      width:sizes.smallMobileMainWidth,
      margin:sizes.marginAuto,
      marginTop:"2rem",
      padding:"1rem"
  },
  [breakpoint(440)] : {
    width:"18rem",
    margin:sizes.marginAuto,
    marginTop:"1rem",
    padding:"1rem"
},
  },
  aboutUs:{
    color:colors.green,
    fontFamily:fonts.fontExtraBold
  },
  textsHeader:{
    fontSize:sizes.largeFontSize,
    color:colors.gray,
    width:"450px",
    fontFamily:fonts.fontExtraBold,
    lineHeight: "3rem",
    [breakpoint(1260)] : {
      fontSize:sizes.middelSize,
  },
  [breakpoint(576)] : {
    fontSize:sizes.middelSize,
    width:"fit-content"
},
  },
  text:{
    color:colors.gray,
    width:"600px",
    lineHeight: "normal",
    [breakpoint(1260)] : {
      width:"fit-content"
  }, 
//   [breakpoint(576)] : {
//     width:rem(sizes.miniMobileMainWidth),
//     margin:sizes.marginAuto,
//     marginTop:"2rem",
// },
    
  },
  texts:{
    display:"flex",
    flexDirection:"column",
    gap:rem(sizes.base),
  //   [breakpoint(576)] : {
  //     width:rem(sizes.miniMobileMainWidth),
  //     margin:sizes.marginAuto,
  //     marginTop:"2rem",
  //     padding:"1rem"
  // },
  },


}

export const useAboutUsStyles = createUseStyles(styles);