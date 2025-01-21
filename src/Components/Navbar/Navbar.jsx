import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
   
      <div className="px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="text-xl font-medium"> Travel Guru </div>
          <div className="nav text-xl font-medium space-x-5">
            <NavLink to="/">News</NavLink>
            <NavLink to="/destination">Destination </NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contant">Contant</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
          <div className="login flex gap-2 items-center">
            <div className=" ">
              <img src="" alt="" />
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
