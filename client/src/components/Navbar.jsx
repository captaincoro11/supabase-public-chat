import React, { useContext, useState, useEffect } from "react";
import Account from "./Account.jsx";
import { FaArrowRight } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { supabase } from "../supabaseClient.js";
import { ClipLoader } from "react-spinners";
import { MyContext } from "./Context.jsx";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const { user, setUser, session, setSession } = useContext(MyContext);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (session) {
        setUser(session.user);
        setSession(session);
      }
      setLoading(false);
    };

    checkSession();
  }, [setUser, setSession]);

  async function signOut() {
    setLoading(true);
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error("There is error in signin out please try again later");
    }
    setUser(null);
    setSession(null);
    setLoading(false);
  }

  return (
    <div>
      <div className=" bg-black flex justify-between p-4 select-none">
        <Toaster />
        <div className=" text-white font-semibold mt-1.5 text-md sm:text-xl font-mono text-tighter">
          SupaBase Chat App
        </div>
        <div className="flex justify-between space-x-5 sm:space-x-12">
          <div className=" cursor-pointer font-mono mt-3 text-white">
            <Link to="/home">{user ? "Home" : ""}</Link>
          </div>
          <div className=" cursor-pointer font-mono mt-3 text-white">
            <Link to="/chat">{user ? "Public Chat" : ""}</Link>
          </div>
          <div
            onClick={signOut}
            className="text-white cursor-pointer mt-3 font-mono font-semibold flex space-x-2"
          >
            <span>
              {loading ? (
                <ClipLoader size={15} color="white" />
              ) : user ? (
                "SignOut"
              ) : (
                ""
              )}
            </span>
            <span className="text-white mt-1">
              {user ? <FaArrowRight /> : ""}
            </span>
          </div>
          <div id="Account">
            <Account />
          </div>
        </div>
      </div>
      <div className=" border border-b border-gray-600" />
    </div>
  );
};

export default Navbar;
