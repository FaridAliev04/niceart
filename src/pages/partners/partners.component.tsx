import { useState } from "react";
import PartnersDataComponent from "./components/partners-data/partners-data.component";
import PartnersMainComponent from "./components/partners-main/partners-main.component";
import PartnersTextComponent from "./components/partners-text/partners-text.component";
import PartnersModalComponent from "./components/partners-modal/partners-modal.component";
import BreadcrumbComponent from "../../core/shared/breadcrumb/breadcrumb.component";

const PartnersComponent = () => {
    const [id,setId]=useState(null)
    return (
        <div>
            <BreadcrumbComponent/>
            <PartnersTextComponent/>
            <PartnersDataComponent id={id} setId={setId}/>
            <PartnersModalComponent  id={id} setId={setId}/>
        </div>
    );
}

export default PartnersComponent;
