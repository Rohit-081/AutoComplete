import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const sizeArr = ["xs", "sm", "md", "lg", "xLg"];
const colorArr = [
  "normal",
  "outline",
  "disabled",
  "rounded",
  "success",
  "danger",
  "warning",
  "info",
];

function Index({ label, onClick, size, tooltip, color }) {
  const checkButtonSize = sizeArr.includes(size) ? size : "";
  const checkButtonStyle = colorArr.includes(color) ? color : "";

  return (
    <>
      <button
        onClick={onClick}
        className={`${checkButtonSize} ${checkButtonStyle}`}
        color={color}
        tooltip={tooltip}
      >
        {label}
      </button>
    </>
  );
}

Index.propTypes = {
  title: PropTypes.string,
};

export default Index;
