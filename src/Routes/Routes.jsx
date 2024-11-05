import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import ProductCards from "../components/ProductCards";
import ErrorPage from "../components/ErrorPage";
import ProductDetails from "../components/ProductDetails";
import Dashboard from "../pages/Dashboard";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('../categories.json'),
            children: [
                {
                    path: '/category/:category',
                    element: <ProductCards></ProductCards>,
                    loader: ()=> fetch('../fakeData.json')
                },
                {
                    path: '/',
                    element: <ProductCards></ProductCards>,
                    loader: ()=> fetch('../fakeData.json')
                }
            ]
        },
        {
            path: '/product/:id',
            element: <ProductDetails></ProductDetails>,
            loader: ()=> fetch('../fakeData.json')
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);

  export default router 