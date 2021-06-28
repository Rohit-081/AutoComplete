import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function Index() {
  const [userInput, setuserInput] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!userInput) {
      return;
    }
    axios
      .get(`http://www.omdbapi.com/?s=${userInput}&apikey=596c79ab`)
      .then((res) => {
        if (res.data && res.data.Search) {
          setSuggestion(res.data.Search);
          console.log("Suggestion:::", suggestion);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userInput]);

  const fetchMovie = (e) => {
    setuserInput(e.target.value);
  };

  const listFetch = (e) => {
    const match = e.target.innerHTML;
    if (list.length < 5) {
      if (!list.includes(match)) {
        setSuggestion([]);
        setList([...list, e.target.innerHTML]);
        setuserInput("");
      } else {
        setuserInput("");
        setSuggestion([]);
      }
    } else {
      setuserInput("");
      setSuggestion([]);
      alert("You can select only 5 movies!");
    }
  };

  function listUpdate(i) {
    var renderlist = [...list];
    renderlist.splice(i, 1);
    console.log(renderlist, i, "before newlist");
    setList(renderlist);
  }

  return (
    <>
      <div className="container_nik">
        <h2>Select your favourite movies</h2>
        <div className="Box">
          {" "}
          <div className="container row select">
            {list.map((listNew, index) => (
              <p className="pill" key={index}>
                {`${listNew}   `}
                <button onClick={() => listUpdate(index)}>x</button>
              </p>
            ))}
            <div>
              <input
                placeholder="Enter Movie"
                onChange={fetchMovie}
                value={userInput}
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="list-center">
          <ul>
            {suggestion.map((suggestions, index) => (
              <li key={index} onClick={listFetch}>
                {suggestions.Title} ({suggestions.Year})
              </li>
            ))}
          </ul>
        </div>
        <p className="hell">Hello</p>
      </div>
    </>
  );
}

export default Index;
