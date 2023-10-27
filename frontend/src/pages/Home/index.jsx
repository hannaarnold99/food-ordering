import cheeseburger from "../../assets/images/cheeseburger.jpg";
import { ProductsPreview } from "../../components/ProductsPreview";
import { Link } from "react-router-dom";

function MyButton() {
  return (
    <button className="bg-red-700 hover:bg-red-600 text-white text-lg font-black p-2 border-solid border-2 border-white">
      Order Now
    </button>
  );
}

const Home = () => {
    return (
      <div>
        <div className="banner w-full md:w-3/4 px-7 mx-auto relative flex items-center justify-between">
            <div className="banner-description w-full md:w-full p-3">
                <h2 className="mb-4 text-4xl font-bold text-white">Delicious Food Delivered to Your Doorstep</h2>
                <p className="text-white pt-5 pb-5 text-lg italic">Now offering free delivery!</p>
                <div className="btn-container">
                    <Link to="/menu"className="text-xl"><MyButton/></Link>
                </div>
                
            </div>
            <div className="banner-image w-full md:w-full pt-10 pl-5">
                <img src={cheeseburger} alt="banner" className="w-max h-max"/>
            </div>
        </div>
          <ProductsPreview/>
        </div>
        

    )
}

export default Home;