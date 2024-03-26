import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";


const ListedBooks = () => {
    
    const [tabIndex,setTabIndex] = useState(0);
  return (
    <div className="max-w-7xl mx-auto py-4 p-3 lg:p-0">
      <div className="bg-[#1313130D] w-full rounded-2xl h-[100px] flex justify-center items-center">
        <h4 className="font-workSans text-2xl font-bold">Books</h4>
      </div>
      <div className="text-center mt-8 mb-10 flex justify-center items-center">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white text-lg font-semibold font-workSans">
            Sort By <IoIosArrowDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Published year</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex items-center p-4 -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-100 ">
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
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tabIndex === 1 ? "border border-b-0 border-r-0" : "border-b border-r-0"}  text-[#13131380]  w-[1033px] `}
        >
         
          <span>Wishlist Books</span>
        </Link>
        
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
