import searchImages from "../model";
import ImageShow from "./ImageShow";

//This component receives the images array coming from the App component state
function ImageList({ images }) {
  return <div>ImageList: {images.length}</div>;
}

export default ImageList;
