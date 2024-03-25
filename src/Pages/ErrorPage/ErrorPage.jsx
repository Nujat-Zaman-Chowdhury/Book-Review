import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center py-10"> 
            <h2 className="text-3xl font-workSans font-bold">Oppss!</h2>
            <Link to="/" className="btn mt-11 font-workSans bg-[#23BE0A] border-0 text-white">Go Home</Link>
        </div>
    );
};

export default ErrorPage;