import ImageShow from "./ImageShow";
import "../css/ImageList.css";

//This component receives the images array coming from the App component state
function ImageList({ images }) {
  console.log(images);

  //Mapping throgh the images array and creating a new list array containing ImageShow components with image.urls.small as props
  const renderedImages = images.map((image) => (
    <ImageShow alt={image} image={image} key={image.id} />
  ));

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
