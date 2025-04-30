import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import HomeComponet from "../pages/home/home.componet";
import PublicComponets from "../core/layouts/public/public.componets";
import AboutComponent from "../pages/about/about.component";
import ProductsComponent from "../pages/products/products.component";
import ProductsParamsComponent from "../pages/products-params/products-params.component";
import PartnersComponent from "../pages/partners/partners.component";
import ContactComponent from "../pages/contact/contact.component";


const router = createBrowserRouter([
    {
        path: Routes.default,
        element: <PublicComponets />,
        children: [
            {
                index: true,
                element: <HomeComponet />

            },
            {
                path: Routes.about,
                element:<AboutComponent/>
            },
            {
                path:Routes.products,
                element:<ProductsComponent/>
            },
            {
                path:Routes.productsParams,
                element:<ProductsParamsComponent/>
            },
            {
                path:Routes.partners,
                element:<PartnersComponent/>
            }
            ,
            {
                path:Routes.contact,
                element:<ContactComponent/>
            }
        ]
    },

])


export default router