import { Link } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContaxt } from "../../AuthContext/AuthProvider";

const Register = () => {
  const { registerUser } = useContext(AuthContaxt);

  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const firstName = form.get("firstName");
    const lastName = form.get("lastName");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");
    // console.log(firstName, lastName, email, password, confirmPassword);

    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        user && setSuccess("create your account successfully");
      })
      .catch((error) => {
        error && setSuccess(error.message);
      });
  };

  return (
    <div className="">
      <Navbar></Navbar>
      <div className="border mx-auto   mt-2 mb-3 w-2/5 rounded-lg">
        <form
          onSubmit={handleRegister}
          className="  lg:px-28    py-2  align-middle  mt-2  bg-white"
        >
          <div>
            <h2 className="text-3xl font-bold pb-2 ">Create an account</h2>
          </div>
          <p className="py-1 ">Type your first name :</p>
          <input
            name="firstName"
            type="text"
            placeholder="First name"
            className="input justify-center input-bordered w-full max-w-xs"
          />
          <p className="py-1 ">Type tour last name :</p>
          <input
            name="lastName"
            type="text"
            placeholder="last name"
            className="input justify-center input-bordered w-full max-w-xs"
          />

          <p className="py-1 ">UserName or Email :</p>
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="input justify-center input-bordered w-full max-w-xs"
          />
          <br />
          <p className="py-1">Password:</p>
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="input input-bordered mt-1 mb-2 w-full max-w-xs"
          />
          <br />
          <p className="py-1"> Confirm Password:</p>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Password"
            className="input input-bordered mt-1 mb-2 w-full max-w-xs"
          />
          <br />
          <button className=" btn bg-[#F9A51A] text-xl max-w-xs w-full">
            Register
          </button>
        </form>
        <p className="text-xl text-center"> {success}</p>
        <div className="text-center mb-4 pt-4">
          <p>
            already have an account ? please login..
            <button className="text-xl text-red-500">
              <Link to="/login">Login</Link>
            </button>
          </p>
        </div>
        <div className="my-2 text-center font-medium text-xl">
          <p>-------------- or -------------</p>
        </div>

        <div className="text-center mb-2">
          <button className="text-xl mb-2  w-1/2 btn btn-circle font-medium text-center">
            {" "}
            <FaFacebookSquare className="pt-1 text-2xl"></FaFacebookSquare>{" "}
            Login With Fecebook
          </button>{" "}
          <br />
          <button className="text-xl w-1/2 btn btn-circle  font-medium text-center">
            <FaGoogle></FaGoogle> Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
