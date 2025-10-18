import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";

import MainLayout from "../Layouts/MainLayout";
import Apps from "../Components/Apps";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";
import InstalledApps from "../Pages/InstalledApps";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Home /> },             // <-- no leading slash
      { path: 'apps', element: <Apps /> },         // <-- no leading slash
      { path: 'app/:id', element: <AppDetails /> },// <-- no leading slash
      { path: 'installed-apps', element: <InstalledApps /> } // <-- no leading slash
    ],
  },
]);


export default router