import {createUseStyles} from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';




const styles = {
    container:{
        marginTop:"2rem",
        display:"flex",
        alignItems: "center",

    },
    contact:{
        color:colors.green
    }


}

export const useMainContactStyles = createUseStyles(styles);