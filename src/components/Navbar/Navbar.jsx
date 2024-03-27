import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-3 lg:py-5 px-3 lg:px-7">
        <div className="navbar bg-base-100 font-workSans flex flex-col lg:flex-row">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0 pr-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#131313CC]"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/listed-books">Listed Books</NavLink>
            <NavLink to="/pages-to-read">Pages to Read</NavLink>
            <NavLink to="/featured">Featured</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-lg lg:text-2xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1  lg:flex gap-2 lg:gap-4 items-center font-semibold ">
          <NavLink to="/" className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] py-3 px-5 rounded-md': 'text-[#131313CC] hover:bg-gray-300 py-3 px-5 rounded-md'}>Home</NavLink>
          <NavLink to="/listed-books"  className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] py-3 px-5 rounded-md': 'text-[#131313CC] hover:bg-gray-300 py-3 px-5 rounded-md'}>Listed Books</NavLink>
          <NavLink to="/pages-to-read" className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] py-3 px-5 rounded-md': 'text-[#131313CC] hover:bg-gray-300 py-3 px-5 rounded-md'}>Pages to Read</NavLink>
          <NavLink to="/featured" className={({isActive})=> isActive? 'text-[#23BE0A] border border-[#23BE0A] py-3 px-5 rounded-md': 'text-[#131313CC] hover:bg-gray-300 py-3 px-5 rounded-md'}>Featured</NavLink>
        </ul>
      </div>
      <div className="navbar-end flex justify-center lg:justify-end lg:w-[50%] gap-4">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
