import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./model";

import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  //Publisher function to be sent as a prop to the child element which will set the searchTerm
  const handleSubmit = async (searchTerm) => {
    const data = await searchImages(searchTerm);

    //set the images state with the array containing the fetched images to be sent as props to the ImageList child
    setImages(data);
  };

  return (
    <div>
      <div>Hello world</div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
