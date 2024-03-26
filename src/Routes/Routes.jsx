import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/Home/ListedBooks/ListedBooks";
import PagestoRead from "../Pages/PagestoRead/PagestoRead";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadBooks from "../components/ReadBooks.jsx/ReadBooks";
import WishLists from "../components/WishLists.jsx/WishLists";

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
            children:[
              {
                index:true,
                element:<ReadBooks></ReadBooks>,
                
              },
              {
                path:'wishList',
                element: <WishLists></WishLists>,
               
              }
            ]
        },
        {
            path:'/pages-to-read',
            element:<PagestoRead></PagestoRead>,
        },
        {
          path: '/book/:id',
          loader: ()=> fetch('/data.json'),
          element:<BookDetails></BookDetails>,
        }
      ]
    },
  ]);