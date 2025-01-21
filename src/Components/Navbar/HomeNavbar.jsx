import { Link, NavLink } from "react-router";

const HomeNavbar = () => {
  return (
    <div className="lg:flex text-center text-white p-2     rounded-xl justify-between">
      <div className="text-xl font-medium pt-2"> Travel Guru</div>
      <div className="border border-gray-500   rounded-xl">
        <input
          type="text"
          placeholder=" Search your destination"
          className="input bg-gray-500"
        />
      </div>
      <div>
        <div className="nav text-white  text-xl pt-2 font-medium  space-x-5">
          <NavLink to="/">News</NavLink>
          <NavLink to="/destination">Destination </NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contant">Contant</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </div>
      <div>
        <Link to="/login">
          <button className=" bg-[#F9A51A] rounded-md font-medium text-white  p-2">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeNavbar;
