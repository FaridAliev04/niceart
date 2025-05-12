import {createUseStyles} from 'react-jss';
import sizes from '../../../../assets/styles/abstracts/sizes';
import { rem } from '../../../../assets/styles/abstracts/function';
import colors from '../../../../assets/styles/abstracts/color';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';



const styles = {
    container:{
        marginTop:"2rem",
        display:"flex",
        alignItems: "center",
        [breakpoint(1260)] : {
            marginTop:"2rem",
         },
         [breakpoint(768)]:{
             marginTop:"2rem",
         },
         [breakpoint(576)] : {
            marginTop:"2rem",
        },
        [breakpoint(440)] : {
            marginTop:"2rem",
        },
    },
    about:{
        color:colors.green
    }


}

export const useMainProductsStyles = createUseStyles(styles);