import {  createContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import { getBooks } from "../../../Utils/LocalStorage";

import {getWishListBooks} from "../../../Utils/WishList"

export const ReadBookContext = createContext();
export const WishListBookContext = createContext();

const ListedBooks = () => {
  const [tabIndex,setTabIndex] = useState(0);
  const [readBooks,setReadBooks] = useState([]);
  const [wishListBooks,setWishListBooks] = useState([])


    useEffect(()=>{
        const getStoredBooks = getBooks();
        setReadBooks(getStoredBooks);

        const getWLBooks = getWishListBooks();
        setWishListBooks(getWLBooks);
    },[])

   const handleSortBy = (filter)=>{
     const storedReadBooks = getBooks();
      if(filter === 'rating'){
      {
        const sortedByRating = storedReadBooks.sort((a,b)=>b.rating - a.rating);
        const sortedByRating2 = wishListBooks.sort((a,b)=>b.rating - a.rating);
        setReadBooks(sortedByRating);
        setWishListBooks(sortedByRating2)
      }
      }
      else if(filter === 'pages'){
        {
          const sortedByPages = storedReadBooks.sort((a,b)=>b.totalPages - a.totalPages);
          const sortedByPages2 = wishListBooks.sort((a,b)=>b.totalPages - a.totalPages);
          setReadBooks(sortedByPages);
          setWishListBooks(sortedByPages2);
        }
      }
      else if(filter === 'year'){
        {
          const sortedByYear = storedReadBooks.sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing);
          const sortedByYear2 = wishListBooks.sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing);
          setReadBooks(sortedByYear);
          setWishListBooks(sortedByYear2);
        }
      }
   }

    

    return (
    <div className="w-full lg:max-w-7xl mx-auto py-4 p-3 lg:p-0">
      <div className="bg-[#1313130D] w-full rounded-2xl h-[100px] flex justify-center items-center">
        <h4 className="font-workSans text-2xl font-bold">Books</h4>
      </div>
      <div className="text-center mt-8 mb-10 flex justify-center items-center">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white text-lg font-semibold font-workSans">
            Sort By <IoIosArrowDown />
          </summary>
          <ul className="p-2 shadow  menu dropdown-content z-[1] bg-base-100 rounded-box w-52 bg-[#1313130D] font-workSans">
            <li onClick={()=>handleSortBy('rating')}>
              <a>Rating</a>
            </li>
            <li onClick={()=>handleSortBy('pages')}>
              <a>Number of pages</a>
            </li>
            <li onClick={()=>handleSortBy('year')}>
              <a>Publisher year</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex items-center p-4  overflow-y-hidden sm:justify-start flex-nowrap text-gray-100 ">
        <Link 
          to=""
            onClick={()=>setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? "border border-b-0" : "border-b"} text-[#13131380]`}
        >
        
          <span>Read Books</span>
        </Link>
        <Link 
          to={`wishList`}
            onClick={()=>setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tabIndex === 1 ? "border border-b-0 border-r-0" : "border-b border-r-0"}  text-[#13131380]  lg:w-[1033px] `}
        >
         
          <span>Wishlist Books</span>
        </Link>
        
      </div>
      
      <ReadBookContext.Provider value={[readBooks]}>
        <WishListBookContext.Provider value={[wishListBooks]}>
          <Outlet></Outlet>
        </WishListBookContext.Provider>
      </ReadBookContext.Provider>
     
    </div>
  );
};

export default ListedBooks;
