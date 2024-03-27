import { useLoaderData, useParams } from 'react-router-dom';
import { getBooks, savedBooks } from '../../Utils/LocalStorage';
import { useState } from 'react';
import { getWishListBooks, removeBooksFromWL, savedWishListBooks } from '../../Utils/WishList';
import { IoMdSwap } from 'react-icons/io';
import toast from 'react-hot-toast';




const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book=> book.bookId === idInt);
    
    // const [read,setRead] = useState(getBooks());
    // const [wishList,setWishList] = useState(getWishListBooks());

    const handleRead =(book) =>{
        removeBooksFromWL(book);
        savedBooks(book);
    } 
    const handleWishList = (book) =>{
        const savedReadBooks = getBooks();
        if(savedReadBooks.find(b=>b.bookId === book.bookId))
        {return toast.error('Already in read list')}
        else{
            savedWishListBooks(book);
        }
    }


    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing } = book;
    return (
        <div className='grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto py-4 p-3 shadow-lg my-2 lg:my-4'>
            <div className='col-span-2 bg-[#1313130D] rounded-2xl flex justify-center items-center p-4'>
                <img src={image} className='lg:h-[400px] object-cover object-center rounded-md' alt="" />
            </div>
            <div className='col-span-2'>
                
                <h1 className='text-[#131313] text-2xl lg:text-4xl font-bold font-playfair'>{bookName}</h1>
                <p className='text-base lg:text-xl font-medium font-workSans text-[#131313CC] mt-4'>By : {author}</p>
                
                <hr className='mt-6 mb-4'/>
                <div>
                    <h4 className='text-base lg:text-xl font-medium font-workSans text-[#131313CC]'>{category}</h4>
                </div>
                <hr className='mt-4 mb-6'/>
                <p className='text-base text-[#131313] font-bold font-workSans'>Review : <span className='text-[#131313B2] font-medium'>{review}</span></p>
                <div className="font-workSans flex items-center gap-3 font-workSans">
                 <h4 className='text-base text-[#131313] font-bold  my-7'>Tag</h4>   
                <button className="btn py-1 px-4 bg-[#23BE0A0D] text-[#23BE0A] rounded-full border-0">{tags[0]}</button>
                <button className="btn py-1 px-4 bg-[#23BE0A0D] text-[#23BE0A] rounded-full border-0">{tags[1]}</button>
                </div>
                <hr className='mt-4 mb-6'/>
                <div className='flex'>
                    <div className='space-y-3'>
                    <h5 className='text-[#131313B2] font-medium font-workSans'>Number of Pages: </h5>
                    <h5 className='text-[#131313B2] font-medium font-workSans'>Publisher: </h5>
                    <h5 className='text-[#131313B2] font-medium font-workSans'>Year of Publishing:</h5>
                    <h5 className='text-[#131313B2] font-medium font-workSans'>Rating:</h5>
                    </div>
                    
                    <div className='space-y-3'>
                    
                    <h5 className='ml-14 text-base font-semibold text-[#131313]'>{totalPages}</h5>
                    <h5 className='ml-14 text-base font-semibold text-[#131313]'>{publisher}</h5>
                     <h5 className='ml-14 text-base font-semibold text-[#131313]'>{yearOfPublishing}</h5>
                     <h5 className='ml-14 text-base font-semibold text-[#131313]'>{rating}</h5>
                    </div>
                </div>
                <div className="font-workSans flex items-center gap-4 mt-7">  
                <button onClick={()=>handleRead(book)} className="btn font-workSans font-semibold text-[#131313] text-base lg:text-lg border-[#1313134D] bg-transparent">Read</button>
                <button onClick={()=>handleWishList(book)}  className="btn font-workSans font-semibold text-white text-base lg:text-lg bg-[#50B1C9]">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;