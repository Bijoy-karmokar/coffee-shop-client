import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";
import CoffeeDetails from "../Pages/CoffeeDetails";
import UpdateCoffee from "../Pages/UpdateCoffee";

const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayouts,
        children:[
            {
                index:true,
                Component:Home,
                loader:()=>fetch("http://localhost:3000/coffees")
            },
            {
                path:"addCoffee",
                Component:AddCoffee
            },
            {
                path:"coffeeDetails/:id",
                loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
                Component:CoffeeDetails
            },
            {
                path:"updateCoffee/:id",
                loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
                Component:UpdateCoffee
            }
        ]
    }
])
export default router;