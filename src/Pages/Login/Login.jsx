import { Link } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
 import { useContext, useState } from "react";
import { AuthContaxt } from "../../AuthContext/AuthProvider";
const Login = () => {
  const { logIn } = useContext(AuthContaxt);
  const [success, setSuccess] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    const from = new FormData(e.currentTarget);
    const email = from.get("email");
    const password = from.get("password");
    // console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        user && setSuccess("User login successfully");
      })
      .catch((error) => {
        error && setSuccess(error.message);
      });
  };

  return (
    <div className="">
      <Navbar></Navbar>

      <div className="border mx-auto    mt-8 mb-3 w-2/5 rounded-lg">
        <form
          onSubmit={handleLogin}
          className="  lg:px-24    py-4  align-middle  mt-8  bg-white"
        >
          <div>
            <h2 className="text-3xl font-bold pb-6 ">Login your account</h2>
          </div>
          <p className="py-1 ">UserName or Email :</p>
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="input justify-center input-bordered w-full max-w-xs"
          />
          <br />
          <p className="py-1">Password</p>
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="input input-bordered mt-1 mb-2 w-full max-w-xs"
          />
          <br />
          <p className="text-xl">{success}</p>
          <div className="my-2 flex justify-between">
            <p>
              <input type="checkbox" name="checkbox" /> Remanber Me
            </p>
            <button className=" btn-link">Forgotten Password</button>
          </div>
          <button className=" btn bg-[#F9A51A] text-xl max-w-xs w-full">
            Login
          </button>
        </form>
        <div className="text-center mb-4 pt-4">
          <p>
            New at this website ? please register..
            <button className="text-xl text-red-500">
              <Link to="/register">Register</Link>
            </button>
          </p>
        </div>
        <div className="my-2 text-center font-medium text-xl">
          <p>-------------- or -------------</p>
        </div>

        <div className="text-center">
          <button className="text-xl mb-2  w-1/2 btn btn-circle font-medium text-center">
            <FaFacebookSquare className="pt-1 text-2xl"></FaFacebookSquare>
            Login With Fecebook
          </button>
          <br />
          <button className="text-xl w-1/2 btn btn-circle  font-medium text-center">
            <FaGoogle></FaGoogle> Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
