import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/Home/ListedBooks/ListedBooks";
import PagestoRead from "../Pages/PagestoRead/PagestoRead";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/listed-books',
            element:<ListedBooks></ListedBooks>,
        },
        {
            path:'/pages-to-read',
            element:<PagestoRead></PagestoRead>,
        },
      ]
    },
  ]);