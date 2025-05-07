import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/function';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';



const styles = {
    container: {
        marginTop:"6rem"
    },
    iconsDiv: {
      display: "flex",
      gap: rem(sizes.base),
      alignItems: "center",
    },
    partnersBoxs: {
      borderRadius: sizes.largeBorderRadius,
      padding: "20px",
      height: "100%",
      display:"flex",
      flexDirection:"column",
      gap:rem(sizes.base),
      boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      cursor: "pointer"

    },
    span:{
        fontFamily:fonts.fontBlack,
    },
    commerce:{
        fontSize:"10px",
        color:colors.green,
        fontFamily:fonts.fontBlack,
    },
    commerceDiv:{
        background:"rgba(62, 111, 0, 0.08)",
        width:"fit-content",
        borderRadius:"8px",
        padding:"2px 4px"
    },
    partnersIcons:{
      width:"32px",
      height:"32px"
    }
  }
  

export const usePartnersDataStyles = createUseStyles(styles);