import SearchBar from "./components/SearchBar";
import ImageShow from "./components/ImageShow";
import searchImages from "./model";

function App() {
  //Publisher function to be sent as a prop to the child element which will set the searchTerm
  const handleSubmit = (searchTerm) => {
    console.log("Do a search with", searchTerm);
  };

  return (
    <div>
      <div>Hello world</div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageShow />
    </div>
  );
}

export default App;
