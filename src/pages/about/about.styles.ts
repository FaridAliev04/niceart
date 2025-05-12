import {createUseStyles} from 'react-jss';
import sizes from '../../assets/styles/abstracts/sizes';
import { breakpoint } from '../../assets/styles/abstracts/mixins';
import { rem } from '../../assets/styles/abstracts/function';




const styles = {
    container:{
        width:sizes.mainWidth,
        margin:sizes.marginAuto,
        [breakpoint(1260)] : {
            padding:"1rem"
         },
    },


}

export const useAboutStyles = createUseStyles(styles);