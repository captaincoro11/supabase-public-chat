import React, { useContext, useState, useEffect, useRef } from "react";
import Messages from "./Messages.jsx";
import { MyContext } from "./Context.jsx";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { supabase } from "../supabaseClient.js";

const PublicChat = () => {
  const { user, messages, setMessages } = useContext(MyContext);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const MessageRef = useRef(null);

  const scrollToBottom = () => {
    MessageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  });
  useEffect(() => {
    const channel = supabase
      .channel("table_db_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          console.log("Real-time payload:", payload);
          if (payload.eventType === "INSERT") {
            setMessages((prevMessages) => [...prevMessages, payload.new]);
            scrollToBottom();
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleAddMessage = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:54321/functions/v1/addMessages",
        {
          content,
          user_id: user.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      toast.success(response.data.message);

      setContent("");
      scrollToBottom();
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1 className=" text-white text-center font-mono mt-4">Public Chat</h1>
      <Toaster />
      <div className="flex justify-center">
        <div className="border w-11/12 sm:w-3/5 h-[500px] mt-4 flex flex-col p-2 rounded-md shadow-md select-none shadow-white border-none overflow-y-auto">
          <div className="flex-grow overflow-y-auto"></div>
          <Messages id={user.id} />
          <div ref={MessageRef} />
        </div>
      </div>
      <div className=" flex justify-center ">
        <div className="flex w-11/12 sm:w-3/5 mt-1">
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="border font-mono mt-2 p-2 w-full rounded-tl-md rounded-bl-md outline-none"
            placeholder="Type a message..."
          />
          <span
            onClick={handleAddMessage}
            className=" mt-2 cursor-pointer text-white bg-green-500 text-center p-2 rounded-tr-md rounded-br-md font-mono font-semibold"
          >
            {loading ? <ClipLoader size={15} color="white" /> : "Send"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PublicChat;
