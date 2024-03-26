// import toast from "react-hot-toast";

// export const getWishBooks = () =>{
//     let wishBooksList = [];
    
//     const storedWishBooks = localStorage.getItem('wish-books');
//     if(storedWishBooks){
//         wishBooksList.push(JSON.parse(storedWishBooks));
        

//     }
//     return wishBooksList;
// }

// export const savedWishBooks = (book) =>{
//     const storedBooks = getWishBooks();
//     const isExits = storedBooks.find(b=> b.bookId === book.bookId);
//     if(!isExits){
//         storedBooks.push(book);
//         localStorage.setItem('wish-books',JSON.stringify(storedBooks))
//         toast.success('Book added to Wish List')
//     }
    
// }