import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Statistics from "../Pages/Statistics/Statistics";

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
                        path: '/Donation/:id',
                        element: <Donation></Donation>,
                        loader: () => fetch('/Card.json')
                  },
                  {
                        path: '/Statistics',
                        element: <Statistics></Statistics>
                  }

            ]
      }
]);

export default myCreatedRoute;