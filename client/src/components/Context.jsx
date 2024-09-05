import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [messages, setMessages] = useState([]);

  return (
    <MyContext.Provider value={{ user, setUser, session, setSession,messages,setMessages }}>
      {children}
    </MyContext.Provider>
  );
};
