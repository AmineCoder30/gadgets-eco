import { Link } from "react-router-dom";
import homeHero from "../../assets/images/home-hero.jpg";
import { ViewVideo } from "../../constants/icons";
import { FeatureList } from "../ui";
function Hero() {
  return (
    <div className=" bg-dark-gray  w-full  px-5">
      <div className="container mx-auto min-h-screen pb-10 flex relative">
        <div className="w-[600px] z-0 absolute right-0 bottom-0">
          <img className="hidden md:block" src={homeHero} alt="tow iphones" />
        </div>
        <div className="w-full relative z-10 flex flex-col justify-end  items-center lg:items-start ">
          <div className="min-h-[500px] flex flex-col justify-center items-start text-center lg:text-left">
            <p className="text-gray-300 text-lg medium mb-3 w-full">
              From $999
            </p>
            <h1 className="text-5xl lg:text-7xl text-white font-semibold mb-4 w-full">
              iPhone 12 Pro
            </h1>

            <div className="flex justify-center lg:justify-start gap-4 mt-10 w-full">
              <button className="text-gray-950 hover:text-white bg-white hover:bg-primary-100 px-6 py-3 transition-all duration-300 rounded-md">
                <Link to="/shop">Shop Now</Link>
              </button>
              <button className="text-gray-500  hover:text-white py-2">
                <Link to="/shop" className="flex items-center gap-2">
                  <ViewVideo />
                  watch video
                </Link>
              </button>
            </div>
          </div>
          <div className="glass w-full p-5 rounded-lg">
            <FeatureList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
