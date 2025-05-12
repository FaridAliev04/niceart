import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';



const styles = {
  container:{
    background:colors.footerBg,
    marginTop:"15rem",
    [breakpoint(1260)] : {
      marginTop:"10rem",
      display: "flex",
        justifyContent: "center"
   },
   [breakpoint(768)] : {
    marginTop:"5rem",
    display:"flex",
    justifyContent:"center",
    background:"none"
  },
  [breakpoint(576)] : {
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