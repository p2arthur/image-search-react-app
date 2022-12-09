import "../css/SearchBar.css";
import searchImages from "../model";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  //Handling the value of the input when submited

  //1) Create a new piece of state
  const [term, setTerm] = useState("e");

  //Creating a onSubmit handler that will call the onSubmit prop (Which is a function inside the App parent component) passing the search term
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  //2) Create an event handler to watch for the "onChange" event
  const handleOnChange = (event) => {
    //3) Update the state with the value of the input
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="search-input">Enter search term:</label>
        <input
          id="search-input"
          value={term}
          onChange={handleOnChange}
          type="text"
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
