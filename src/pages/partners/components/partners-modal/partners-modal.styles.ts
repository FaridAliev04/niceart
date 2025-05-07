import { createUseStyles } from "react-jss";
import sizes from "../../../../assets/styles/abstracts/sizes";
import { rem } from "../../../../assets/styles/abstracts/function";
import colors from "../../../../assets/styles/abstracts/color";
import fonts from "../../../../assets/styles/abstracts/fonts";
import { breakpoint } from "../../../../assets/styles/abstracts/mixins";

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1000,
  },
  partnersIcons:{
    width:"60px",
    height:"60px"
  },
  modal: {
    width: "fit-content",
    padding: "1.5rem",
    background: colors.white,
    borderRadius: "8px",
    display:"flex",
    flexDirection:"column",
    gap:"1rem",
    [breakpoint(1260)] : {
      width:rem(sizes.tabletMainWidth),
      margin:sizes.marginAuto,
   },
   [breakpoint(768)]:{
       width:rem(sizes.largeMobileMainWidth),
       margin:sizes.marginAuto,
   },
   [breakpoint(576)] : {
       width:rem(sizes.miniMobileMainWidth),
       margin:sizes.marginAuto,
   },
  },
  iconsDiv: {
    display: "flex",
    gap: rem(sizes.base),
    alignItems: "center",
  },
  icon: {
    width: "60px",
  },
  partners: {
    fontFamily: fonts.fontBlack,
    fontSize: sizes.smallFontSize,
  },
  commerce: {
    fontSize: "10px",
    color: colors.green,
    fontFamily: fonts.fontBlack,
    background: "rgba(62, 111, 0, 0.08)",
    width: "fit-content",
    borderRadius: "8px",
    padding: "2px 4px",
  },
  modalHeaderDiv: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  texts: {
    color: colors.gray,
    width: "36.25rem",
    lineHeight: "22px",
    [breakpoint(1260)] : {
      width:"fit-content"
   },
   [breakpoint(768)]:{
       width:"fit-content"
   },
   [breakpoint(576)] : {
       width:"fit-content"
   },
  },
  partnersBtn: {
    display: "flex",
    alignItems: "center",
    background: colors.green,
    color: colors.white,
    gap: "5px",
    border: "none",
    fontFamily: fonts.font,
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    width: "100%",
    justifyContent: "center",
  },
  partnersCloseBtn: {
    display: "flex",
    alignItems: "center",
    background: colors.white,
    color: colors.green,
    gap: "5px",
    border: `1px solid ${colors.green}`,
    fontFamily: fonts.font,
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    width: "100%",
    justifyContent: "center",
    [breakpoint(1260)] : {
      marginTop:"0.5rem"
   },
   [breakpoint(768)]:{
       marginTop:"0.5rem"
   },
   [breakpoint(576)] : {
       marginTop:"0.5rem"
   },
  },
};

export const usePartnersModalStyles = createUseStyles(styles);
