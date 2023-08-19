import React from "react";
import "../Button/SelectedButton.css";

const SelectedButton = ({ children, onClick, selected }) => {
  return (
    <span
      onClick={onClick}
      className="selectButton"
      style={{
        backgroundColor: selected ? "gold" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? "700" : 500,
      }}
    >
      {children}
    </span> 
  );
};

export default SelectedButton;
