import { useState } from "react";
import PartnersDataComponent from "./components/partners-data/partners-data.component";
import PartnersMainComponent from "./components/partners-main/partners-main.component";
import PartnersTextComponent from "./components/partners-text/partners-text.component";
import { usePartnersStyles } from "./partners.style";
import PartnersModalComponent from "./components/partners-modal/partners-modal.component";

const PartnersComponent = () => {
    const classes=usePartnersStyles()
    const [id,setId]=useState(null)
    return (
        <div className={classes.container}>
            <PartnersMainComponent/>
            <PartnersTextComponent/>
            <PartnersDataComponent id={id} setId={setId}/>
            <PartnersModalComponent  id={id} setId={setId}/>
        </div>
    );
}

export default PartnersComponent;
