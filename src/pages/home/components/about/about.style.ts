import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';
import { rem } from '../../../../assets/styles/abstracts/function';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';



const styles = {
    container:{
        width:sizes.mainWidth,
        margin:sizes.marginAuto,
        marginTop:"20rem",
        [breakpoint(1260)] : {
            width:rem(sizes.tabletMainWidth),
            margin:sizes.marginAuto,
            marginTop:"10rem",
        },
        [breakpoint(768)] : {
            width:rem(sizes.largeMobileMainWidth),
            margin:sizes.marginAuto,
            marginTop:"5rem",
            padding:"0 1rem",
            display:"flex",
            flexDirection:"column",
            gap:"1rem"
        },
        [breakpoint(576)] : {
            width:rem(sizes.miniMobileMainWidth),
            margin:sizes.marginAuto,
            marginTop:"5rem",
            padding:"0 1rem",
        },
    },
    aboutMainDiv:{
        background:colors.divBackground,
        [breakpoint(1260)]:{
            padding:"2rem",
            display:"flex",
            flexDirection:"column",
            gap:"2rem"
        }
    },
    section:{
        position:"relative",
        padding:"28rem 7rem 2rem 7rem",
        [breakpoint(1260)]:{
            position:"static",
            display:"flex",
            flexDirection:"column",
            gap:"1rem",
            padding:"0rem"
        }
    },
    imgDiv:{
        position:"absolute",
        top:"-10rem",
        left:"7rem",
        [breakpoint(1260)]:{
            position:"static",
            display:"flex",
            justifyContent:"center",
            "& img":{
                maxWidth:"70%"
            }
        },
        [breakpoint(768)]:{
            display:"block",
            "& img":{
                maxWidth:"100%"
            }
        }
    },
    text:{
        lineHeight:"22px"
    },
    sectionSecond:{
        position:"relative",
        padding:"2rem 7rem 3rem 7rem",
        [breakpoint(1260)]:{
            display:"flex",
            justifyContent:"space-between",
            position:"static",
            padding:"0",
        },
        [breakpoint(768)]:{
            display:"flex",
            flexDirection:"column",
            gap:rem(sizes.base)
        }
    },
    secondImg:{
        position:"absolute",
        top:" 2rem",
        right:" 8rem",
        [breakpoint(1260)]:{
            position:"static",
            display:"flex",
            justifyContent:"center",
            "& img":{
                maxWidth:"70%"
            }
        },
        [breakpoint(768)]:{
            display:"block",
            "& img":{
                maxWidth:"100%"
            }
        }
    },
    aboutUsHeader:{
        color:colors.green,
        lineHeight:"100%",
        fontFamily:fonts.fontExtraBold
    },
    mainHeader:{
        fontSize:sizes.largeFontSize,
        color:colors.gray,
        fontFamily:fonts.fontExtraBold,
        width:"500px",
        [breakpoint(1260)]:{
           width:"280px", 
        },
        [breakpoint(768)]:{
            width:"fit-content",
            fontSize:sizes.largeMobileLargeFontSize
        }
    },
    texts:{
        color:colors.gray,
        lineHeight:"22px",
        width:"500px",
        [breakpoint(1260)]:{
            width:"280px"
        },
        [breakpoint(768)]:{
            width:"fit-content"
        }
    },
    learnMore:{
        color:colors.gray,
        fontSize:"20px",
        lineHeight:"22px",
        fontFamily:fonts.fontBold,

    },
    line:{
        border:`2px solid ${colors.green}`,
        width:"6rem"
    },
    textsDiv:{
        display:"flex",
        flexDirection:"column",
        gap:"2rem"
    },
    learnMoreDiv:{
        display:"flex",
        flexDirection:"column",
        gap:rem(sizes.base)
    }
}

export const useAboutHomeStyle = createUseStyles(styles);