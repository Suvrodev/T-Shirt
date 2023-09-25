import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import OrderReview from "../Pages/OrderReview/OrderReview";
import Contact from "../Pages/Contact/Contact";
import Context from "../Pages/Context/Context";
import GrandPa from "../Pages/AllContextPage/GrandPa";
import Details from "../Pages/Details/Details";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorElement></ErrorElement>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
          path: '/review',
          element: <OrderReview/>
        },
        {
          path: '/context',
          element: <Context/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/grandpa',
          element: <GrandPa/>
        },
        {
          path: '/shirt/:id',
          element: <Details></Details>
        }
      ]
    },
  ]);

  export default router  