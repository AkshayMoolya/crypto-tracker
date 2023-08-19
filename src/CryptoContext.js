import React, { createContext, useContext, useEffect, useState } from "react";

const crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setcurrency] = useState("INR");
  const [Symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") {
      setSymbol("₹");
    } else if (currency === "USD") {
      setSymbol("$");
    }
  }, [currency]);

  return <crypto.Provider value={{currency,setcurrency,Symbol}}>{children}</crypto.Provider>;
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(crypto);
};
