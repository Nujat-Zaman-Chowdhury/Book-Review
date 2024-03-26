import { FaRegStar } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const ReadBookList = ({book}) => {
    console.log(book);
    return (
        <div className="card flex flex-row items-center bg-base-100 border border-[#13131326] mt-9 p-5 cursor-pointer">
      <figure className="bg-[#F3F3F3] w-[230px] rounded-lg p-6 h-full">
        <img className=""
          src={book.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-2xl font-bold font-playfair my-4">{book.bookName}</h2>
        <p className="font-workSans font-medium text-[#131313CC]">By: {book.author}</p>
        <div className="font-workSans flex items-center gap-3">
        <h4 className='text-base text-[#131313] font-bold  my-7'>Tag</h4> 
            <button className="btn py-1 px-4 bg-[#23BE0A0D] text-[#23BE0A] rounded-full border-0">{book.tags[0]}</button>
            <button className="btn py-1 px-4 bg-[#23BE0A0D] text-[#23BE0A] rounded-full border-0">{book.tags[1]}</button>
            <span className="flex items-center"><CiLocationOn /> Year of Publishing: {book.yearOfPublishing}</span>
        </div>
        <div className="flex text-base items-center gap-4 text-[#13131399] font-workSans mt-5 mb-4">
            <div className="flex gap-2 items-center">
                <IoPeopleOutline></IoPeopleOutline>
                <span>Publisher: {book.publisher}</span>
            </div>
            <div className="flex gap-2 items-center">
                <IoPeopleOutline></IoPeopleOutline>
                <span>Page: {book.totalPages}</span>
            </div>
        </div>
        <hr className="border border-dashed my-5" />
        <div className="font-workSans flex  items-center gap-3">
            <button className="btn py-1 px-4 bg-[#328EFF] bg-opacity-20 text-[#328EFF] rounded-full border-0">Category: {book.category}</button>
            <button className="btn py-1 px-4 bg-[#FFAC33] bg-opacity-20 text-[#FFAC33] rounded-full border-0">Rating: {book.rating}</button>
            <button className="btn py-1 px-4 bg-[#23BE0A] text-white rounded-full border-0">View Details</button>
        </div>
        
      </div>
    </div>
    );
};

export default ReadBookList;