import {createUseStyles} from 'react-jss';
import sizes from '../../../assets/styles/abstracts/sizes';
import colors from '../../../assets/styles/abstracts/color';



const styles = {
    container:{
        marginTop:"2rem",
        display:"flex",
        alignItems: "center",
    },
    about:{
        color:colors.green
    }


}

export const usebreadCrumb = createUseStyles(styles);