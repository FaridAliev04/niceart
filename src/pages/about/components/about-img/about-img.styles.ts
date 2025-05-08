import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/function';
import colors from '../../../../assets/styles/abstracts/color';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';



const styles = {
  container:{
    // width:sizes.mainWidth,
    // margin:sizes.marginAuto,
    background:colors.footerBg,
    marginTop:"15rem",
    [breakpoint(1260)] : {
      // width:"46rem",
      // margin:sizes.marginAuto,
      marginTop:"10rem",
      display: "flex",
        justifyContent: "center"
   },
   [breakpoint(768)] : {
    // width:rem(sizes.largeMobileMainWidth),
    // margin:sizes.marginAuto,
    marginTop:"5rem",
    display:"flex",
    justifyContent:"center",
    background:"none"
  },
  [breakpoint(576)] : {
    // width:"18rem",
    // margin:sizes.marginAuto,
    marginTop:"2rem",
},
  },
  imgDiv:{
    bottom: "6rem",
    position: "relative",
    left: "8rem",
    width: "fit-content",
    "& video":{
      maxWidth:"100%",
    },
    [breakpoint(1260)] : {
      position:"static",
    display:"flex",
    justifyContent:"center",
    "& video":{
      maxWidth:"100%",
    }
   },
   [breakpoint(768)] : {
    // width:rem(sizes.largeMobileMainWidth),
    position:"static",
    display:"flex",
    justifyContent:"center",
    "& video":{
      maxWidth:"100%",
    }
  }
  }


}

export const useAboutImgStyles = createUseStyles(styles as any);