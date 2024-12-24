import React from "react";

const Button = ({ title, ...props }) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: "red",
        padding: "10px",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {title || "Button"}
    </button>
  );
};

export default Button;
