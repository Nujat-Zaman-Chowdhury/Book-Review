import { useEffect, useState } from 'react';
import toast  from 'react-hot-toast';
export const getBooks = () =>{
    let booksList = [];
    
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        booksList = JSON.parse(storedBooks);
    }
    return booksList;
}

export const savedBooks = (book) =>{
    const storedBooks = getBooks();
    const isExits = storedBooks.find(b=> b.bookId === book.bookId);
    if(!isExits){
        storedBooks.push(book);
        localStorage.setItem('books',JSON.stringify(storedBooks))
        toast.success('Book added in the read list')
    }
    else{
       return toast.error('Already added in readlist');
    }

}

export const handleSortby = (filter) => {
    const books = getBooks();
  
    if (filter === "rating") {
      return books.slice().sort((a, b) => b.rating - a.rating);
    } else if (filter === "pages") {
      return books.slice().sort((a, b) => b.totalPages - a.totalPages);
    } else if (filter === "year") {
      return books.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
  
    return books;
  };