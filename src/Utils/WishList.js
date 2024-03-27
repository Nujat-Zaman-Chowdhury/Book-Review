import toast  from 'react-hot-toast';
export const getWishListBooks = () =>{
    let wishListBooks = []
    const storedBooks = localStorage.getItem('wish-list');
    if(storedBooks){
        wishListBooks = JSON.parse(storedBooks);

    }
    return wishListBooks;
}

export const savedWishListBooks = (book) =>{
    const storedBooks = getWishListBooks();
    const isExits = storedBooks.find(b=> b.bookId === book.bookId);
    if(!isExits){
        storedBooks.push(book);
        localStorage.setItem('wish-list',JSON.stringify(storedBooks))
        toast.success('Book added in the wish list')
    }
    else{
       return toast.error('already added in the wish list')
    }

}

export const removeBooksFromWL = (book)=>{
    let storedWLBooks = getWishListBooks();
    const remainingWLBooks = storedWLBooks.filter(b=>b.bookId !== book.bookId);
    localStorage.setItem('wish-list',JSON.stringify(remainingWLBooks));
}