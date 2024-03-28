import { useContext} from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { WishListBookContext } from "../../Pages/Home/ListedBooks/ListedBooks";

const WishLists = () => {
    const [wishListBooks] = useContext(WishListBookContext)

    return (
        <div>
           <div>
           {
            wishListBooks.map(book=>(
                <div key={book.bookId} className="card grid grid-cols-1 lg:grid-cols-2 items-center bg-base-100 border border-[#13131326] mt-9 p-5 gap-5">
                <figure className="bg-[#F3F3F3]  rounded-lg p-6  h-full">
                  <img className="w-[200px]"
                    src={book.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body space-y-2">
                  <h2 className="card-title text-2xl font-bold font-playfair m2-4">{book.bookName}</h2>
                  <p className="font-workSans font-medium text-[#131313CC]">By: {book.author}</p>
                  <div className="font-workSans flex flex-col lg:flex-row items-center gap-3">
                  <h4 className='text-base text-[#131313] font-bold  my-4'>Tag</h4> 
                      <button className="btn py-1 px-4 bg-[#23BE0A0D] text-[#23BE0A] rounded-full border-0">{book.tags[0]}</button>
                      <button className="btn py-1 px-4 bg-[#23BE0A0D] text-[#23BE0A] rounded-full border-0">{book.tags[1]}</button>
                      <span className="flex flex-col lg:flex-row items-center"><CiLocationOn /> Year of Publishing: {book.yearOfPublishing}</span>
                  </div>
                  <div className="flex flex-col lg:flex-row text-base items-center gap-4 text-[#13131399] font-workSans mt-5 space-y-2 lg:space-y-0 mb-4">
                      <div className="flex flex-col lg:flex-row gap-2 items-center">
                          <IoPeopleOutline></IoPeopleOutline>
                          <span>Publisher: {book.publisher}</span>
                      </div>
                      <div className="flex gap-2 items-center">
                          <MdOutlineContactPage></MdOutlineContactPage>
                          <span>Page: {book.totalPages}</span>
                      </div>
                  </div>
                  <hr className="border border-dashed my-5" />
                  <div className="font-workSans flex flex-col lg:flex-row items-center gap-3">
                      <button className="btn py-1 px-4 bg-[#328EFF] bg-opacity-20 text-[#328EFF] rounded-full border-0">Category: {book.category}</button>
                      <button className="btn py-1 px-4 bg-[#FFAC33] bg-opacity-20 text-[#FFAC33] rounded-full border-0">Rating: {book.rating}</button>
                      <Link to={`/book/${book.bookId}`} className="btn py-1 px-4 bg-[#23BE0A] text-white rounded-full border-0">View Details</Link>
                  </div>
                  
                </div>
              </div>

            ))
           }
        </div> 
        </div>
    );
};

export default WishLists;