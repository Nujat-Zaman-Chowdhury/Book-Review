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