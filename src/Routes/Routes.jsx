import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Rooms from "../Pages/Rooms/Rooms";
import Login from "../Pages/Login/Login";
import Detail from "../Pages/Details/Detail";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivateRoutes from "./PrivateRoutes";
import Upadate from "../Pages/Upadate/Upadate";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/rooms',
          element: <Rooms></Rooms>,
        },
        {
          path: '/details/:id',
          element: <PrivateRoutes ><Detail></Detail></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
          path: '/mybookings',
          element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
        },
        {
          path: 'update/:id',
          element: <Upadate></Upadate>,
        }, 
        {
          path: '/contact',
          element: <Contact></Contact>
        }
      ]
    },
  ]);

  export default router;