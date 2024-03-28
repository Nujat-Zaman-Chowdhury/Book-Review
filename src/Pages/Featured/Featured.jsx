import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Featured = () => {

    const [featuredBooks,setFeaturedBooks] = useState([]);
    const [count , setCount] = useState(0);
    
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setFeaturedBooks(data))
    },[])
    const handleCount = ()=>{
      setCount(count+1);
      toast.success("added to cart");
    }
  return (
    <div className="w-full lg:max-w-7xl mx-auto p-3">
      <h2 className="text-[#131313] font-bold text-4xl font-playfair text-center">
        Featured Books : {count}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 font-playfair">
        {
            featuredBooks.map(book=>((
                <div key={book.id} className=" p-6 rounded-md shadow-md dark:bg-zinc-300-100 dark:text-gray-900 space-y-3 font-playfair">
        <img src={book.imageLink} alt="" className="object-cover h-72 mx-auto rounded-md  dark:bg-gray-500" />
        <div className="mt-6 mb-2">
            <span className="block text-2xl font-medium tracking-widest uppercase text-zinc-900">{book.title}</span>
            <h2 className="text-xl font-semibold tracking-wide">{book.language}</h2>
        </div>
        <p className="dark:text-gray-800 font-workSans"><span className="font-semibold text-black">Author:</span> {book.author}</p>
        <p className="dark:text-black font-workSans"><span className="font-semibold text-black">Price:</span> {book.price} Taka</p>
        <button onClick={handleCount} className="btn bg-blue-900 bg-opacity-45 text-white btn-sm md:btn-md lg:btn-lg bg">Add to cart</button>
        </div>
            )))
        }
      </div>
    </div>
  );
};

export default Featured;
