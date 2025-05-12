import {createUseStyles} from 'react-jss';
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
        [breakpoint(440)] : {
            padding:"0rem"
        },
    },
    about:{
        color:colors.green
    }


}

export const usePartnersMainStyles = createUseStyles(styles);