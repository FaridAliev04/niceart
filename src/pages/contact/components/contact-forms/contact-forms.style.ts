import { createUseStyles } from "react-jss";
import sizes from "../../../../assets/styles/abstracts/sizes";
import { rem } from "../../../../assets/styles/abstracts/function";
import colors from "../../../../assets/styles/abstracts/color";
import fonts from "../../../../assets/styles/abstracts/fonts";
import { breakpoint } from "../../../../assets/styles/abstracts/mixins";

const styles = {
  submitBtn: {
    backgroundColor: colors.green,
    color: colors.white,
    width: "100%",
    padding: "0.625rem",
    borderRadius: "0.5rem",
    border: "none",
    fontFamily: fonts.fontExtraBold,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
  },
  label: {
    color: colors.gray,
    fontSize: "0.875rem",
  },
  mainDiv: {
    display: "flex",
    justifyContent: "space-between",
    gap: "5rem",
    padding: "3rem 0",
    width: sizes.mainWidth,
    margin: sizes.marginAuto,
    marginTop: sizes.componentTop,
    [breakpoint(1260)]: {
      width: rem(sizes.tabletMainWidth),
      margin: sizes.marginAuto,
    },
    [breakpoint(768)]: {
      width: rem(sizes.largeMobileMainWidth),
      margin: sizes.marginAuto,
      display: "flex",
      flexDirection: "column",
    },
    [breakpoint(576)]: {
      width: rem(sizes.miniMobileMainWidth),
      margin: sizes.marginAuto,
      padding: "2rem",
    },
  },
  container: {
    background: colors.footerBg,
    marginTop: sizes.componentTop,
  },
  header: {
    fontSize: sizes.extraLargeFontSize,
    fontFamily: fonts.fontExtraBold,
    color: colors.green,
    width: "26.438rem",
    [breakpoint(768)]: {
      fontSize:sizes.middelSize,
      width:"fit-content"
    },
    [breakpoint(576)]: {
      fontSize:sizes.middelSize,
      width:"fit-content"
    },
  },
  text: {
    width: "31.25rem",
    color: colors.gray,
    lineHeight: "22px",
    [breakpoint(1260)]: {
      width:"25rem"
    },
    [breakpoint(768)]: {
      width:"fit-content"
    },
    [breakpoint(576)]: {
      width:"fit-content"
    },
  },
  textDiv: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
  },
  inp: {
    width: "100%",
    padding: "0.5rem 1rem !important",
  },
  form: {},
};

export const useContactFormsStyles = createUseStyles(styles);
