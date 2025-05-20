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
    // width:"33.125rem",
    fontFamily:fonts.fontExtraBold,
    lineHeight: "4rem",
    [breakpoint(1260)] : {
      fontSize:sizes.middelSize,
      // width:"18rem",
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
 marginTop:"4rem",
        [breakpoint(768)] : {
            marginTop:"2rem"
         },
        [breakpoint(576)] : {
            marginTop:'2rem',
         },
  },
  aboutUs:{
    color:colors.green,
    fontFamily:fonts.fontExtraBold
  },
  textsHeader:{
    fontSize:sizes.largeFontSize,
    color:colors.gray,
    fontFamily:fonts.fontExtraBold,
    lineHeight: "3rem",
    padding:"0",
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
    width:"fit-content",
    lineHeight: "normal",

    
  },
  texts:{
    display:"flex",
    flexDirection:"column",
    gap:rem(sizes.base),
    padding:"0"
  },
mainHeaderDiv:{
  padding:"0"
}

}

export const useAboutUsStyles = createUseStyles(styles);