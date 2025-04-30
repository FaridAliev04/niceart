import {createUseStyles} from 'react-jss';
import sizes from '../../assets/styles/abstracts/sizes';
import { breakpoint } from '../../assets/styles/abstracts/mixins';
import { rem } from '../../assets/styles/abstracts/function';




const styles = {
    container:{
        width:sizes.mainWidth,
        margin:sizes.marginAuto,
        [breakpoint(1260)] : {
            width:rem(sizes.tabletMainWidth),
            margin:sizes.marginAuto,
            padding:"1rem"
         },
         [breakpoint(768)]:{
             width:rem(sizes.largeMobileMainWidth),
             margin:sizes.marginAuto,
             padding:"1rem"
         },
         [breakpoint(576)] : {
            width:sizes.smallMobileMainWidth,
            margin:sizes.marginAuto,
            padding:"1rem"
        },
        [breakpoint(440)] : {
           width:rem(sizes.miniMobileMainWidth),
           margin:sizes.marginAuto,
           padding:"1rem"
       },
    },


}

export const useProductsStyles = createUseStyles(styles);