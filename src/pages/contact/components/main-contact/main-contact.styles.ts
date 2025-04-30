import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/function';
import colors from '../../../../assets/styles/abstracts/color';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';



const styles = {
    container:{
        width:sizes.mainWidth,
        margin:sizes.marginAuto,
        marginTop:"2rem",
        display:"flex",
        alignItems: "center",
        [breakpoint(1260)] : {
            width:rem(sizes.tabletMainWidth),
            margin:sizes.marginAuto,
            marginTop:"2rem",
            padding:"1rem"
         },
         [breakpoint(768)] : {
            width:rem(sizes.largeMobileMainWidth),
            margin:sizes.marginAuto,
            marginTop:"2rem",
            padding:"1rem"
         },
         [breakpoint(576)] : {
            width:rem(sizes.miniMobileMainWidth),
            margin:sizes.marginAuto,
            marginTop:"2rem",
            padding:"1rem"
        },
    },
    contact:{
        color:colors.green
    }


}

export const useMainContactStyles = createUseStyles(styles);