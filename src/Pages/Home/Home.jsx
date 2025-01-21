import HomeNavbar from "../../Components/Navbar/HomeNavbar";
import bgImage from "../../assets/Rectangle 1.png";
const Home = () => {
  return (
    <div className="">
         <div
          className=" rounded-2xl min-h-screen "
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
      <div className="hero-overlay ">
     
          <HomeNavbar></HomeNavbar>
          <div className="grid text-white  md:grid-cols-2 ">
            <div className="my-auto  ">
              <h2 className="text-5xl my-5 py-3 text-center">Cox's bazar</h2>
              <p className="text-center mx-4 mb-4">
                Cox's Bazar is a city, fishing port, tourism centre and district
                headquarters in southeastern Bangladesh. It is famous mostly for
                its long natural sandy beach, and it .
              </p>
              <button className=" bg-[#F9A51A] rounded-md font-medium ml-48  text-white lg:mb-60   p-2">
                Booking
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
