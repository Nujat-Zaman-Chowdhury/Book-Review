import { useEffect, useState } from "react";
import { getBooks } from "../Utils/LocalStorage";


const useLocalStorage = () => {
    const [localData,setLocalData] = useState([]);
    useEffect(()=>{
        setLocalData(getBooks());
    },[])
    return {localData};
    
};

export default useLocalStorage;