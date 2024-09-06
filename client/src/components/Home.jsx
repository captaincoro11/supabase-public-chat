import React, { useContext } from "react";
import { MyContext } from "./Context.jsx";
import saas_Image from "../assets/saas_Image.png";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, setUser } = useContext(MyContext);
  const email = user.email;
  const navigate = useNavigate();

  const goToChatting = () => {
    navigate("/chat");
  };
  return (
    <div className=" mt-24 ml-8 sm:ml-20 select-none flex sm:flex-col md:flex-row space-x-6 text-white ">
      <div className=" text-xl sm:text-4xl flex flex-col animate-slide-in-left">
        <span className=" text-green-500 font-semibold font-mono">Hi!</span>
        <span className=" font-semibold font-mono">{email}</span>
        <span className="text-lg font-mono mt-12">
          <p>Experience one of the world's best chat apps,</p>

          <p> designed for seamless communication without message </p>
          <p>
            encryption. Powered by{" "}
            <span className=" text-green-600 font-semibold">PostgreSQL </span>
            and <span className=" text-green-600 font-semibold">SupaBase </span>
            , it{" "}
          </p>
          <p>delivers a user experience that's ten times better!</p>
        </span>

        <span className=" mt-12 ">
          <button
            onClick={goToChatting}
            className=" shadow-lg shadow-green-500 flex justify-evenly text-lg font-mono p-2 rounded-md sm:w-72 bg-white text-green-500"
          >
            <span>Start Chatting Now</span>
            <span className="mt-1">
              <FaArrowRight />
            </span>
          </button>
        </span>
      </div>
      <div className=" sm:flex hidden sm:justify-evenly animate-slide-in-right sm:mt-24 md:mt-0">
        <img
          className="shadow-md shadow-green-500 rounded-md w-4/5"
          src={saas_Image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
