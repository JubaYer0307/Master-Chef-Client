import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Chefs from "../Pages/Chefs/Chefs/Chefs";
import ChefDetails from "../../src/Layout/ChefDetails";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import Page404 from "../Pages/404/Page404";

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
    path: '/chef',
    element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
    children: [
      {
        path: ':id',
        element: <Chefs></Chefs>
      }
    ]
  },
  {
    path: '/blog',
    element: <Blog></Blog>
  },
  {
    path: '/',
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '*',
    element: <Page404 />
  }
]);

export default router;
