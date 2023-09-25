import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Dontaion from "../Pages/Donation/Donation";
import Donation from "../Pages/Donation/Donation";

const myCreatedRoute = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout></MainLayout>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/Donation',
                        element: <Donation></Donation>
                  },
                  {
                        path: '/Statistics',
                        element: <Donation></Donation>
                  }
            ]
      }
]);

export default myCreatedRoute;