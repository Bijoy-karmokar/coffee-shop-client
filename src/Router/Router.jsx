import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";

const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayouts,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"addCoffee",
                Component:AddCoffee
            }
        ]
    }
])
export default router;