import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";


const Home = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto">
        <Banner></Banner>
        </div>
        </>
        
    );
};

export default Home;