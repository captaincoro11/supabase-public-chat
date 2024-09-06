import React, { useContext, useState } from "react";
import { supabase } from "../supabaseClient.js";
import { ClipLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./Context.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, setUser, session, setSession } = useContext(MyContext);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage("");

    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    const { data, error } = response;

    if (error) {
      setError(error.message);
      toast.error(error.message);
    } else {
      setSuccessMessage("Signed In successfully!");
      toast.success("Signed In successfully!");
      setSession(data.session);
      setUser(data.session.user);
    }
    setLoading(false);
  };

  return (
    <div className=" h-full bg-moreBlack text-white">
      <Toaster />
      <div className=" flex justify-center w-full items-center font-mono mt-24   ">
        <div className=" rounded-md shadow-gray-400 shadow-lg md:w-1/3 sm:w-3/5 w-11/12 p-6">
          <h1 className=" font-semibold text-5xl  font-mono text-center">
            Login
          </h1>
          <p className=" text-gray-600 text-center text-xl mt-2">
            Enter your credentials to start chatting!
          </p>
          <div className=" mt-12 flex flex-col">
            <label htmlFor="">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" border rounded-md shadow-sm w-full h-12 text-black "
              type="text"
            />
          </div>

          <div className=" mt-6 flex flex-col">
            <label htmlFor="">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" border rounded-md shadow-sm text-black w-full h-12 "
              type="password"
            />
          </div>

          <div className=" flex justify-center mt-8 ">
            <button
              onClick={handleLogin}
              className=" bg-white text-black p-2  w-32 rounded-md "
            >
              {loading ? <ClipLoader size={15} color="black" /> : "Login"}
            </button>
          </div>

          <div className="flex justify-center mt-6">
            <p>
              Not Registered Yet?{" "}
              <Link to="/" className=" underline text-blue-600 cursor-pointer">
                Click Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
