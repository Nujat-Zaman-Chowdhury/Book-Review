import { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';

const Books = () => {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className='w-full lg:max-w-7xl mx-auto mt-8 lg:mt-20'>
            <h2 className='text-[#131313] font-bold text-4xl font-playfair text-center'>Books</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
           
           {
               books.map(book=><BookCard book={book} key={book.bookId}></BookCard>)
           }
       </div>
        </div>
    );
};

export default Books;