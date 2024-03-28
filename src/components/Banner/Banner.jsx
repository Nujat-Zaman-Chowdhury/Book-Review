import { Link } from "react-router-dom";
import banner from '../../assets/banner.jpg'
const Banner = () => {
  return (
    <div className="hero bg-[#1313130D] rounded-3xl w-full lg:max-w-7xl mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse py-14">
        <img className="h-[200px] lg:h-[394px]"
          src={banner}
        />
        <div className="text-center lg:text-left">
          <h1 className="text-2xl lg:text-5xl font-bold font-playfair lg:leading-relaxed text-[#131313]">Books to freshen up 
          <br />your bookshelf</h1>
          <Link to="/listed-books" target="_blank" className="btn mt-4 lg:mt-11 font-workSans bg-[#23BE0A] border-0 text-white">View The List</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
