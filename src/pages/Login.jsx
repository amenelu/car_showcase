import React from "react";
import logo from "../assets/logo.png";
import right from "../assets/right.png";
const Login = () => {
  return (
    <>
      <div className="flex ">
        <div className="flex flex-col w-3/5">
          <img src={logo} alt="logo" className="self-start" />
          <form className="self-center space-y-5" action="">
            <h1 className="font-bold text-4xl ">create your account</h1>
            <div className=" flex gap-x-2">
              <div className="flex flex-col">
                <label htmlFor="firstname">firstname</label>
                <input
                  type="text"
                  className="border-2 p-1 rounded-md"
                  id="firstname"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastname">Lastname</label>
                <input
                  type="text"
                  className="border-2 p-1 rounded-md"
                  id="lastname"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email address</label>
              <input
                type="text"
                name="email"
                id="email"
                className="border-2 p-1 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="border-2 p-1 rounded-md"
              />
            </div>
            <div className=" flex gap-x-2">
              <div className="flex flex-col">
                <label htmlFor="firstname">password</label>
                <input
                  type="text"
                  className="border-2 p-1 rounded-md"
                  id="firstname"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastname">Retype password</label>
                <input
                  type="text"
                  className="border-2 p-1 rounded-md"
                  id="lastname"
                />
              </div>
            </div>
            <div className="flex ">
              <input type="checkbox" name="agree" id="agree" />
              <label htmlFor="agree" className="text-gray-500">
                I agree to the
                <span className="text-purple-900 font-bold">Terms and conditions</span>
                and <span className="text-purple-900 font-bold">privacy policy</span>
              </label>
              <button className="bg-yellow-600 text-white w-1/2 px-5 mx-5 rounded-xl"> SIGN UP</button>
            </div>
            <div className="flex justify-center mt-20">
                <h3>Already have an account?</h3>
                <button className="bg-transparent text-yellow-500 font-bold"> Login</button>
            </div>
          </form>
        </div>
        <div className="justify-end ">
          <img src={right} alt="rignt" className=" h-3/5" />
        </div>
      </div>
    </>
  );
};

export default Login;
