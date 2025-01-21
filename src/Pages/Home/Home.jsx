import HomeNavbar from "../../Components/Navbar/HomeNavbar";
import bgImage from "../../assets/Rectangle 1.png";
import p1 from "../../assets/Rectangle 28.png";
import p2 from "../../assets/Rectangle 26.png";
import p3 from "../../assets/Rectangle 27.png";

const Home = () => {
  return (
    <div className="">
      <div
        className=" rounded-2xl   h-screen "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-80 ">
          <HomeNavbar></HomeNavbar>
          <div className="grid text-white  md:grid-cols-2 ">
            <div className=" my-auto  ">
              <h2 className="text-7xl font-extrabold text-center mb-4">Cox's bazar</h2>
              <p className="text-center mx-4 mb-4">
                Cox's Bazar is a city, fishing port, tourism centre and district
                headquarters in southeastern Bangladesh. It is famous mostly for
                its long natural sandy beach, and it .
              </p>
              <button className=" bg-[#F9A51A] rounded-md font-medium md:ml-48  text-white    p-2">
                Booking . . .
              </button>
            </div>
            <div className="grid gap-4 grid-cols-3 py-auto md:mt-16 mr-2">
              <img className="h-72" src={p1} alt="" />
              <img  className="h-72"  src={p2} alt="" />
              <img   className="h-72"  src={p3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
