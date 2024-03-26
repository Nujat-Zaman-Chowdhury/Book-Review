import toast  from 'react-hot-toast';
export const getBooks = () =>{
    let readBooksList = [];
    
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        readBooksList.push(JSON.parse(storedBooks));
    }
    return readBooksList;
}

export const savedBooks = (book) =>{
    const storedBooks = getBooks();
    const isExits = storedBooks.find(b=> b.bookId === book.bookId);
    if(!isExits){
        storedBooks.push(book);
        localStorage.setItem('books',JSON.stringify(storedBooks))
        toast.success('Book added in the read list')
    }
    
}

