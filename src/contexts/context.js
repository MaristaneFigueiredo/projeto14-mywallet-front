import { useState, createContext } from "react";
import React from "react";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [emailLogado, setEmailLogado] = useState(localStorage.getItem("email"));
  const [loading, setLoading] = useState(0);

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        loading,
        setLoading,
        emailLogado,
        setEmailLogado,
      }}
    >
      {children}
    </Context.Provider>
  );
};
