import { useState } from "react";
import ReadBookList from "../ReadBookList/ReadBookList";






const ReadBooks = () => {
    const [books, setBooks] = useState ( () => {
        const books = localStorage.getItem("books");
       const parsedBooks = JSON.parse(books);
       console.log(parsedBooks);
       return parsedBooks;
       });
       
    return (
        <>
        {
            books.map(book=><ReadBookList book={book} key={book.bookId}></ReadBookList>)
            
        }
        </>
    );
};

export default ReadBooks;