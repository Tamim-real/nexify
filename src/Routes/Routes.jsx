import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";

import MainLayout from "../Layouts/MainLayout";
import Apps from "../Components/Apps";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";
import InstalledApps from "../Pages/InstalledApps";

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
       {
         path:'/',
        element: <Home />
       },
        {
    path:'/apps',
    element: <Apps />
  },
 {
   path: '/app/:id',
   element: <AppDetails />,
   errorElement: <ErrorPage />
 },

 {
  path: '/installed-apps',
  element: <InstalledApps />
 }

    ]

  },
 
 
])

export default router