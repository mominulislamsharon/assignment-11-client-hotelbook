import Banner from "../Banner/Banner";
import Room from "../Room/Room";




const Home = () => {
    return (
        <div>
            <h1>HOme page</h1>
            <div className="container mx-auto">
            <Banner></Banner>
            </div>
            <Room></Room>
        </div>
    );
};

export default Home;