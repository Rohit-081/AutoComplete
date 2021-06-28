import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import InputView from "../InputView/Index";
import AutoComplete from "../AutoComplete/Index";
import ButtonView from "../ButtonView/Index";

function Index({ title }) {
  return (
    <div className="container-card">
      <div className="card">
        <h1>{title}</h1>
        <InputView />
        <ButtonView
          label={"Normal Button"}
          onClick={() => {}}
          size="sm"
          tooltip="Click Me!"
          color="normal"
        />
        <AutoComplete />
      </div>
    </div>
  );
}

Index.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Index;
