import { Link } from "react-router-dom";
import banner from '../../assets/banner.jpg'
const Banner = () => {
  return (
    <div className="hero bg-[#1313130D] rounded-3xl max-w-7xl mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse py-14">
        <img
          src={banner}
        />
        <div>
          <h1 className="text-5xl font-bold font-playfair leading-relaxed text-[#131313]">Books to freshen up 
          <br />your bookshelf</h1>
          <Link to="/listed-books" target="_blank" className="btn mt-11 font-workSans bg-[#23BE0A] border-0 text-white">View The List</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
