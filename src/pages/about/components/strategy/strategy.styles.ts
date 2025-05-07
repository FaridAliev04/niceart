import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/function';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';



const styles = {
  container:{
    marginTop:"7rem",
    [breakpoint(1260)]:{
      width:"46rem",
      margin:sizes.marginAuto,
      marginTop:"5rem"
    },
    [breakpoint(768)]:{
      width:rem(sizes.largeMobileMainWidth),
      margin:sizes.marginAuto,
      marginTop:"5rem"
    },
    [breakpoint(576)] : {
      width:rem(sizes.miniMobileMainWidth),
      margin:sizes.marginAuto,
      marginTop:"5rem",
      padding:"1rem",
      "& h1":{
        width:"fit-content",
        fontSize:sizes.middelSize
      },
      "& p":{
        width:"fit-content",
      }
  },[breakpoint(440)] : {
      width:"18rem"
  },
  },
  strategy:{
    color:colors.green,
    fontFamily:fonts.fontExtraBold,
  },
  strategyHeader:{
    fontSize:sizes.largeFontSize,
    color:colors.gray,
    fontFamily:fonts.fontExtraBold,
    width:"23.75rem",
    lineHeight:"3rem"
  },
  strategyDiv:{
    display:"flex",
    flexDirection:"column",
    gap:rem(sizes.base)
  },
  imgDiv:{
    background:colors.footerBg,
    width:"5rem",
    height:"5rem",
    borderRadius:"100%",
    display:"flex",
    alignItems: "center",
    justifyContent: "center"

  },
  fingerDiv:{
    display:"flex",
    justifyContent:"space-between",
    [breakpoint(1260)]:{
      display:"flex",
      justifyContent:"center",
    },
    [breakpoint(768)]:{
      display:"flex",
      justifyContent:"center",
    }
  },
  fingerMainDiv:{
    display:"flex",
    gap:"2rem",
    marginTop:"2rem",
    [breakpoint(768)]:{
      display:"flex",
      flexDirection:"column"
    }
  },
  dataHeader:{
    color:colors.green,
    fontFamily:fonts.fontExtraBold,
    width:" fit-content",
    fontSize:"20px"
  },
  dataText:{
    color:colors.gray,
    width:"22.813rem",
    lineHeight:"22px",
    [breakpoint(1260)]:{
      width:"15rem"
    },
    [breakpoint(768)]:{

    },
    [breakpoint(576)] : {

  },[breakpoint(440)] : {
  }
  },
  fingerBox:{
    display:"flex",
    flexDirection:"column",
    gap:"1rem"
  }
}

export const useStrategyStyles = createUseStyles(styles);