import React, { useState } from "react";
import "./index.css";

function Index() {
  const [name, setName] = useState({ firstname: " ", lastname: " " });
  return (
    <div className="row">
      <div>
        <input
          className="input"
          type="text"
          placeholder="Enter your first name"
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        />
        <input
          className="input"
          type="text"
          placeholder="Enter your last name"
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />
      </div>
      <div>
        <input
          className="input"
          type="text"
          placeholder="Enter your Email"
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        />
        <input
          className="input"
          type="text"
          placeholder="Enter your Mobile No."
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />
      </div>
    </div>
  );
}

export default Index;
