import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Chefs from "../Pages/Chefs/Chefs/Chefs";
import ChefDetails from "../../src/Layout/ChefDetails"
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: 'chef',
        element: <ChefDetails></ChefDetails>,
        children: [
            {
                path: ':id',
                element: <Chefs></Chefs>
            }
        ]
    }
])

export default router;