import { FaRegStar } from "react-icons/fa";
const BookCard = ({ book }) => {
  const {bookId, bookName,author,image,review,totalPages,rating,category } = book;
  return (
    <div className="card bg-base-100 border border-[#13131326] mt-9 p-5">
      <figure className="bg-[#F3F3F3] h-[230px] rounded-lg">
        <img className=""
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="font-workSans flex items-center gap-3">
            <button className="btn py-1 px-4 bg-[#23BE0A0D] text-[#23BE0A] rounded-full border-0">Young Adult</button>
            <button className="btn py-1 px-4 bg-[#23BE0A0D] text-[#23BE0A] rounded-full border-0">Identity</button>
        </div>
        <h2 className="card-title text-2xl font-bold font-playfair my-4">{bookName}</h2>
        <p className="font-workSans font-medium text-[#131313CC]">By: {author}</p>
        <hr className="border border-dashed my-5" />
        <div className="font-workSans flex justify-between items-center gap-3">
            <h4>{category}</h4>
            <span className="flex items-center gap-2 text-base font-medium text-[#131313CC]">{rating} <FaRegStar></FaRegStar></span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;