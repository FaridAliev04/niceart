import { Outlet } from "react-router-dom";
import NavComponet from "./components/nav/nav.componet";
import FooterComponent from "./components/footer/footer.component";

const PublicComponets = () => {
    return (
        <div>
            <NavComponet />
            <Outlet />
            <FooterComponent />
        </div>
    );
}

export default PublicComponets;
