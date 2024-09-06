import React, { useContext } from "react";
import { MyContext } from "./Context.jsx";

const Account = () => {
  const { user } = useContext(MyContext);
  return (
    <div className="text-white cursor-pointer">
      <div className="flex justify-center items-center">
        <p className="w-12 h-12 flex justify-center items-center rounded-full bg-gradient-to-r from-green-500  to-blue-500 select-none">
          {user ? (
            <div className=" font-bold text-black">
              {user.email[0].toUpperCase()}
            </div>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
};

export default Account;
