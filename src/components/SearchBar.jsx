import searchImages from "../model";

function SearchBar({ onSubmit }) {
  //Creating a click handler that will call the onSubmit prop (Which is a function inside the App parent component) passing the search term
  const handleClick = () => onSubmit("cars");

  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>Click-me</button>
    </div>
  );
}

export default SearchBar;
