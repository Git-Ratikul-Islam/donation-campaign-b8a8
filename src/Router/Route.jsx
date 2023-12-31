import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Statistics from "../Pages/Statistics/Statistics";
import Donation from "../Pages/Donation/Donation";
import Description from "../Pages/Description/Description";

const myCreatedRoute = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout></MainLayout>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>,
                        loader: () => fetch('/Card.json')
                  },
                  {
                        path: '/Donation',
                        element: <Donation></Donation>,
                        loader: () => fetch('/Card.json')
                  },
                  {
                        path: '/Description/:id',
                        element: <Description></Description>,
                        loader: () => fetch('/Card.json')
                  },
                  {
                        path: '/Statistics',
                        element: <Statistics></Statistics>,
                        loader: () => fetch('/Card.json')
                  }

            ]
      }
]);

export default myCreatedRoute;